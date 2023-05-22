<script setup lang="ts">
import { NuxtError } from 'nuxt/app';

defineProps<{
  error: Partial<NuxtError>
}>()
</script>

<template>
  <div class="container">
    <article>
      <header>
        <h1>{{ error.statusCode }}</h1>
      </header>
      {{ error.statusMessage }}
    </article>
    <button @click="clearError({ redirect: '/' })">Go home</button>
    <details>
      <summary>Details</summary>
      <pre>
        {{ error }}
      </pre>
    </details>
  </div>
</template>

<style scoped lang="scss">
@mixin var($x: 20rem) {
  width: $x;
  margin-left: auto;
  margin-right: auto;
}

article {
  @include var;
  text-align: center;

  header {
    height: 7rem;
  }

  & + button {
    @include var;
  }
}

details {
  @include var(30rem);
  margin-top: 2rem;
}
</style>