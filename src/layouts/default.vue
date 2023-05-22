<script setup lang="ts">
import '@picocss/pico'
</script>

<template>
  <Head>
    <Link rel="icon" href="/favicon.ico" />
  </Head>
  <Header />
  <main class="container">
    <slot />
  </main>
</template>

<style>
main {
  margin-top: 3rem;
}
</style>