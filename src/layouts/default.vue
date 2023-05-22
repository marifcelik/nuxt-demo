<script setup lang="ts">
import '@picocss/pico'
</script>

<template>
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