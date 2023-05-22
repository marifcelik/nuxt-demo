<script setup lang="ts">
const checkedCategories = useState('checkedCategories');

defineProps<{
  categories: string[] | null
}>();
</script>

<template>
  <details role="list">
    <summary aria-haspopup="listbox">Categories</summary>
    <ul role="listbox">
      <li v-for="category, i in categories" :key="i">
        <label>
          <input type="checkbox" :value="category" v-model="checkedCategories">
          {{ category }}
        </label>
      </li>
    </ul>
  </details>
</template>