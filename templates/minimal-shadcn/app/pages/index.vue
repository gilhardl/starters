<template>
  <div
    container
    mx-auto
    flex
    flex-col
    items-center
    p-4
  >
    <section
      prose
      text-center
    >
      <h1>Welcome to Nuxt minimal starter</h1>

      <p>
        This is a minimal starter for Nuxt. It is a simple and clean starter for
        Nuxt using shadcn/ui.
      </p>
    </section>

    <section
      grid
      grid-cols-1
      md:grid-cols-2
      gap-4
    >
      <ShowcaseCard
        title="Get Started"
        md:col-span-2
      >
        <p text-center>
          Start by editing the <a
            href="https://nuxt.com/docs/guide/directory-structure/pages"
            target="_blank"
            rel="noopener"
          >home page</a> at <code>pages/index.vue</code> using your own <a
            href="https://nuxt.com/docs/guide/directory-structure/components"
            target="_blank"
            rel="noopener"
          >components</a>. This starter app is using a default <a
            href="https://nuxt.com/docs/guide/directory-structure/layouts"
            target="_blank"
            rel="noopener"
          >layout</a> at <code>layouts/default.vue</code> which use the <code>&lt;Footer /&gt;</code> component.
        </p>
      </ShowcaseCard>

      <ShowcaseCard title="Modules">
        <p>
          Discover our list of modules to supercharge your Nuxt project. Created by the Nuxt team and community.
        </p>
      </ShowcaseCard>

      <ShowcaseCard
        title="Examples"
        lg:row-start-3
      >
        <p>Explore different way of using Nuxt features and get inspired with our list of examples.</p>
      </ShowcaseCard>

      <ShowcaseCard
        title="Documentation"
        md:col-span-2
        lg:col-span-1
        lg:row-span-2
      >
        <p>We highly recommend you take a look at the Nuxt documentation to level up.</p>
      </ShowcaseCard>
    </section>
  </div>
</template>
