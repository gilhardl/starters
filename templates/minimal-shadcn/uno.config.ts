import {
  mergeConfigs,
  presetAttributify,
  presetTagify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'
import { colors } from 'unocss/preset-mini'
import config from './.nuxt/uno.config.mjs'

export default mergeConfigs([config, {
  theme: {
    colors: {
      primary: colors.green,
      secondary: colors.blue,
      success: colors.green,
      info: colors.blue,
      warning: colors.yellow,
      error: colors.red,
      neutral: colors.slate
    }
  },
  presets: [
    presetUno(),
    presetShadcn(),
    presetAttributify(),
    presetTagify(),
    presetTypography(),
    presetWebFonts(),
    presetAnimations()
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ],
  content: {
    pipeline: {
      include: [
        /\.(vue|[jt]sx|mdx?|html)($|\?)/,
        /app\/components\/ui\/.*\.([jt]s)($|\?)/
      ]
    }
  }
}])
