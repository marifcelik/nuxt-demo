<script setup lang="ts">
import { z } from 'zod';

defineProps<{
  prod: z.infer<typeof prodSchema>
}>()
</script>

<template>
  <article>
    <header>
      <img :src="prod.image" :alt="prod.title">
    </header>
    <p>{{ prod.title }}</p>
    <NuxtLink :to="{ name: 'prods-id', params: { id: prod.id } }" role="button" class="outline">
      {{ new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(prod.price) }}
    </NuxtLink>
  </article>
</template>

<style>
article header {
  height: 12rem;
  text-align: center;
}

article header img {
  height: 100%;
}
</style>