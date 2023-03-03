import Axios from 'axios'
import logger from 'react-native-simple-logger'
import {APPConfig} from '../Helpers'

const axiosInstance = Axios.create({
  baseURL: APPConfig.URL
})

axiosInstance.interceptors.request.use(
  async (config) => {
    if (global.isLogin && global.userData && global.userData.authToken) {
      config.headers.Authorization = 'Bearer ' + global.userData.authToken
    }
    logger.log(`axios request : ${config?.url} =>`, config)
    return config
  },
  (error) => {
    logger.error('axios request error =>', error.response || error)
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  async (response) => {
    try {
      const {httpMetric} = response.config.metadata
      httpMetric.setHttpResponseCode(response.status)
      httpMetric.setResponseContentType(response.headers['content-type'])
      await httpMetric.stop()
    } finally {
      logger.log(`axios response : ${response?.config?.url} <=`, response)
      return response
    }
  },
  async (error) => {
    try {
      const {httpMetric} = error.config.metadata
      httpMetric.setHttpResponseCode(error.response.status)
      httpMetric.setResponseContentType(error.response.headers['content-type'])
      await httpMetric.stop()
    } finally {
      logger.error('axios response error =>', error.response || error)
      return Promise.reject(error)
    }
  }
)

const getFormData = (object) => {
  const formData = new FormData()
  Object.keys(object).forEach((key) => formData.append(key, object[key]))
  return formData
}
const APICall = async (method = 'post', payload, url = '', headers = {}, formData = false) => {
  let body = payload
  if (global?.userData?.access_token) body = {...body, access_token: global.userData.access_token}
  const config = {
    method: method.toLowerCase(),
    timeout: 1000 * 60 * 2
  }
  if (url) {
    config.url = url
  }
  if (body && method.toLowerCase() === 'get') {
    config.params = body
  } else if (body && method.toLowerCase() === 'post' && !formData) {
    config.data = body
  } else if (body && method.toLowerCase() === 'post' && formData) {
    config.data = getFormData(body)
  } else {
    config.data = body
  }
  if (headers) {
    config.headers = headers
  }

  return new Promise((resolve) => {
    axiosInstance(config)
      .then((res) => {
        logger.log(`${url} Response=>`, res)

        resolve({statusCode: res.status, data: res.data})
      })
      .catch((error) => {
        logger.apiError(`${url} Error=>`, error)

        if (error.response) {
          resolve({
            statusCode: error.response.status,
            data: error.response.data
          })
        }
        resolve({statusCode: 500, data: 'Something went to wrong!'})
      })
  })
}

export default APICall
