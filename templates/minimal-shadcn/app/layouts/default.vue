<template>
  <div min-h-screen flex flex-col gap-4>
    <main grow>
      <slot />
    </main>

    <footer>
      <Separator my-2 />

      <Footer />
    </footer>
  </div>
</template>
