import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'
import { useCallback } from 'react'
import { initReactI18next, useTranslation } from 'react-i18next'

import en from './locales/en.json'
export type Translation = (key: keyof typeof en, options?: any) => string

export type LocaleKeys = keyof typeof en

const locales = {
  en: () => import('./locales/en.json')
}

export const useAppTranslation = (): Translation => {
  const { t } = useTranslation()

  return useCallback(
    (key: LocaleKeys, options?: any): string => {
      const value = t(key, `!!${key}`, options)
      if (!value) return key
      return value
    },
    [t]
  )
}

export const translate = (key: LocaleKeys, props?: any): string => {
  return i18n.t(key, props)
}

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    backend: {
      loadPath: () => '{{lng}}',
      parse: (data: any) => data,
      request: async (
        _options: any,
        url: string,
        _payload: string,
        callback: any
      ) => {
        // if (url === 'en') {
        // }

        let promise = (locales[url as keyof typeof locales] ?? locales.en)()
        const locale = await promise
        callback(undefined, { status: 200, data: locale })
      }
    },
    fallbackLng: 'en'
  })

export { i18n }
