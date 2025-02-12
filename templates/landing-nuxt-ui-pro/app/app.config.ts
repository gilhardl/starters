export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'slate'
    },
    navigationMenu: {
      slots: {
        root: 'ring-1 ring-[var(--ui-border)] px-8 gap-x-0 rounded-full',
        list: 'gap-2'
      }
    }
  },
  uiPro: {
    header: {
      slots: {
        root: 'lg:!border-transparent'
      }
    }
  }
})
