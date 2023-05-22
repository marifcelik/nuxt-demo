<script setup lang="ts">
let id = useRoute().params.id as string;

const { data: prod, error } = await useFetch(`${useRuntimeConfig().public.API_URL}/products/${id}`, {
  transform: v => prodSchema.parse(v)
})

if (error.value || !prod)
  throw createError({ statusCode: 404, statusMessage: 'product not found' })

useHead({
  title: prod.value?.title,
  meta: [{ name: 'description', content: prod.value?.description.slice(0, 25) + '...' }]
})
</script>

<template>
  <div id="prod">
    <img :src="prod?.image" :alt="prod?.title">
    <div id="details">
      <h2>{{ prod?.title }}</h2>
      <p>{{ prod?.description }}</p>
    </div>
  </div>
</template>

<style>
#prod {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  width: 100%;
  height: 100%;
}
</style>