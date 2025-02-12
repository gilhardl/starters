export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'slate'
    },
    card: {
      slots: {
        header: 'flex flex-wrap items-center justify-between',
        body: 'space-y-4'
      }
    }
  }
})
