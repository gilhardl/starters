<template>
  <div class="flex flex-col gap-2">
    <h2>
      Welcome to Todos.
    </h2>

    <p>
      A
      <ULink
        href="https://nuxt.com"
        target="_blank"
        rel="noopener"
      >
        Nuxt
      </ULink>
      demo hosted on
      <ULink
        href="https://pages.cloudflare.com"
        target="_blank"
        rel="noopener"
      >
        Cloudflare Pages
      </ULink>
      with server-side rendering on the edge and using
      <ULink
        href="https://developers.cloudflare.com/d1/"
        target="_blank"
        rel="noopener"
      >
        Cloudflare D1 database
      </ULink>
      .
    </p>

    <p>
      It is made using
      <ULink
        href="https://hub.nuxt.com"
        target="_blank"
        rel="noopener"
      >
        NuxtHub
      </ULink>
      for a zero-config development & deployment experience on Cloudflare.
    </p>

    <USeparator size="sm" />

    <p class="text-sm italic">
      No personal information regarding your GitHub account are stored in database.<br>
      We store only the todos created linked with your GitHub ID.
    </p>
  </div>
</template>
