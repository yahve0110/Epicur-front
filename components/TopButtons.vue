<script setup lang="ts"></script>

<template>
  <div class="flex items-center text-sm">
    <Button
      variant="outline"
      class="flex border items-center mr-2 border-emerald-500 rounded-2xl p-2 text-emerald-500 hover:bg-gray-100 hover:text-emerald-500 h"
    >
      <Icon name="mynaui:logout" class="mr-1 w-4 h-4" /> Log in
    </Button>
    <Button
      class="flex group relative text-center justify-center items-center text-emerald-50 bg-emerald-400 min-w-20 rounded-2xl p-2 hover:bg-emerald-500"
    >
      52 $
      <div class="flex text-center items-center">
        <span class="bg-emerald-50 h-6 w-0.5 mx-2"></span>
        <span
          class="flex text-center items-center gap-1 transition duration-300 group-hover:opacity-0"
        >
          <b>3</b>
          <Icon name="icon-park-outline:buy" class="w-4 mr-0.5" />
        </span>
        <Icon
          name="mynaui:arrow-long-right"
          size={12}
          class="absolute right-4 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 w-5 h-5"
        />
      </div>
    </Button>
  </div>
</template>

<style scoped></style>
