import { pwaConfig } from "./app/pwa.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxthq/studio',
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
      title: 'Landing Pro',
      htmlAttrs: { lang: 'en' },
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', sizes: 'any', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ],
      meta: [
        { name: 'description', content: 'A landing page app build with Nuxt UI Pro and Nuxt Hub' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'og:image', content: '/social.png' },
        { name: 'twitter:image', content: '/social.png' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },
  pwa: pwaConfig,
  css: ['~/assets/styles/main.css'],
  content: {
    database: {
      type: 'd1',
      bindingName: 'DB'
    }
  },
  mdc: {
    highlight: {
      noApiRoute: false
    }
  },
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
