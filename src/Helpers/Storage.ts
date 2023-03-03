import AsyncStorage from '@react-native-async-storage/async-storage'

const setRemainData = async (userData: any) => {
  try {
    await AsyncStorage.setItem('@remainData', JSON.stringify(userData))
  } catch (e) {}
}

const getRemainData = () => {
  return new Promise((resolve) => {
    try {
      AsyncStorage.getItem('@remainData')
        .then((value: any) => {
          resolve(JSON.parse(value))
        })
        .catch(() => resolve(false))
    } catch (e) {
      resolve(null)
    }
  })
}

const setSeenAppMenu = async (isSeen: number) => {
  try {
    await AsyncStorage.setItem('@isSeen', JSON.stringify(isSeen))
  } catch (e) {}
}

const getSeenAppMenu = () => {
  return new Promise((resolve) => {
    try {
      AsyncStorage.getItem('@isSeen')
        .then(() => {
          resolve(true)
        })
        .catch(() => resolve(false))
    } catch (e) {
      resolve(null)
    }
  })
}

const Storage = {
  setRemainData,
  getRemainData,
  setSeenAppMenu,
  getSeenAppMenu
}

export default Storage
