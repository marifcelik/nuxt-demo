<template>
  <header class="prose dark:prose-invert">
    <nav>
      <NuxtLink to="/">
        <h1>logo</h1>
      </NuxtLink>
      <ul>
        <li>
          <NuxtLink :to="{ name: 'index' }">home</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ name: 'posts ' }">posts</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">about</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>