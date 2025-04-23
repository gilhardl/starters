import { appDescription, appName } from "~/utils/constants";
import { pwaConfig } from "./app/pwa.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxthub/core',
    '@pinia/colada-nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    'nuxt-auth-utils'
  ],
  devtools: {
    enabled: true,
    vscode: {
      enabled: true,
      startOnBoot: true,
      reuseExistingServer: true,
      codeServer: 'ms-code-cli',
      host: '0.0.0.0',
      port: 8000
    }
  },
  app: {
    head: {
      title: appName,
      htmlAttrs: { lang: 'en' },
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', sizes: 'any', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ],
      meta: [
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'og:image', content: '/social.png' },
        { name: 'twitter:image', content: '/social.png' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },
  pwa: pwaConfig,
  css: ['~/assets/styles/main.css'],
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2025-01-14',
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    prerender: {
      crawlLinks: false,
      routes: ['/']
    }
  },
  hub: {
    database: true
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        commaDangle: 'never',
        semi: false
      }
    }
  }
})
