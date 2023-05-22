<script setup lang="ts">
import { z } from 'zod';

const search = ref<string>('');
const checkedCategories = useState<string[]>('checkedCategories', () => []);
const sort = useState<keyof typeof Sorts>('sort', () => 'default');

const api = useRuntimeConfig().public.API_URL;

const { data: prods } = useLazyFetch(`${api}/products`, {
  transform: v => z.array(prodSchema).parse(v)
})

const { data: categories } = useLazyFetch(`${api}/products/categories`, {
  transform: v => z.array(z.string()).parse(v)
})

const filteredProds = computed(() => {
  let filtered = prods.value?.filter(prod =>
    prod.title.toLowerCase().includes(search.value.toLowerCase()) &&
    (checkedCategories.value.length
      ? checkedCategories.value.includes(prod.category)
      : true)
  )

  switch (sort.value) {
    case 'name':
      filtered?.sort((a, b) => a.title.localeCompare(b.title))
      break;
    case 'name_d':
      filtered?.sort((a, b) => b.title.localeCompare(a.title))
      break;
    case 'price':
      filtered?.sort((a, b) => a.price - b.price)
      break;
    case 'price_d':
      filtered?.sort((a, b) => b.price - a.price)
      break
    case 'default':
      break;
  }

  return filtered;
})

useHead({
  title: 'Products',
  meta: [{ name: 'description', content: 'Nuxt 3 demo products' }]
})

</script>

<template>
  <div>
    <h1>products</h1>
    <input type="search" v-model.trim="search" />
    <div class="grid">
      <Sorter />
      <Filter :categories="categories" />
    </div>
    <div id="posts">
      <Product v-for="prod in filteredProds" :key="prod.id" :prod="prod" />
    </div>
  </div>
</template>

<style>
#posts {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
</style>