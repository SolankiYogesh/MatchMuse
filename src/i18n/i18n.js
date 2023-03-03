import {initReactI18next} from 'react-i18next'
import i18n from 'i18next'

import English from './locales/English.json'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'English',
  fallbackLng: 'English',
  resources: {
    English
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18n
