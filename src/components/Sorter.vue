<script setup lang="ts">
const sort = useState('sort');
</script>

<template>
  <select name="sort" v-model="sort">
    <option v-for="(sortName, sortType) in Sorts" :value="sortType">{{ sortName }}</option>
  </select>
</template>