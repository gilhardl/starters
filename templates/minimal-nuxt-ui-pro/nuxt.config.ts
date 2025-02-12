import { pwaConfig } from "./app/config/pwa";
import { appDescription } from "./app/constants";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    '@nuxt/eslint',
    '@nuxthub/core',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt'
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
      title: 'Minimal Pro',
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
