<script setup>
const id = ref('')
</script>

<template>
  <input type="text" v-model="id"><br>
  <NuxtLink :to="{ name: 'posts-id', params: { id } }">go</NuxtLink>
</template>