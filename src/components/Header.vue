<template>
  <header>
    <nav class="container-fluid">
      <ul>
        <li>
          <NuxtLink to="/"><strong>logo</strong></NuxtLink>
        </li>
      </ul>
      <ul>
        <li>
          <NuxtLink :to="{ name: 'index' }">home</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ name: 'prods' }">products</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ name: 'about' }">about</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
$navMargin: 2rem !important;

ul:first-child {
  margin-left: $navMargin;
}

ul:last-child {
  margin-right: $navMargin;
}
</style>