<script setup lang="ts">


</script>

<template>

  <header class="flex items-center m-6 gap-16 justify-between border-b pb-5">
    <NuxtLink class="flex items-center" to="/"
    ><img src="/icons/logo.svg" alt="logo" class="w-12 h-12 mr-4" />
      <h1 class="font-custom text-3xl font-bold">Epicurean Delight</h1>
    </NuxtLink>

<div class="w-full relative">
  <Icon name="ic:outline-search"earch class="absolute  left-2 top-2.5 text-gray-500 h-5 w-5"  />
  <input type="text" placeholder="Search for a dish..."
         class= "h-10 px-2 py-1 w-full  rounded-lg outline-0 p-2 focus:outline-0 bg-gray-200 pl-9"  />
</div>

    <TopButtons />
  </header>

</template>
