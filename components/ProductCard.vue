<!-- components/ProductCard.vue -->
<script setup lang="ts">
const props = defineProps<{
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    rating: number;
  };
}>();
</script>

<template>
  <div class="w-72">
    <div class="bg-green-200/50 flex justify-center p-8 rounded-xl">
      <img
        :src="props.product.imageUrl"
        :alt="props.product.name"
        class="w-[215px] h-[215px]"
      />
    </div>
    <div class="flex justify-between items-center">
      <h2 class="text-2xl mt-2">{{ props.product.name }}</h2>
      
      <span class="flex items-center text-sm"
        ><Icon name="mynaui:star" class="w-4 mr-0.5"
        />{{ props.product.rating }} </span>
    </div>

    <p class="text-gray-400">{{ props.product.description }}</p>
    <div class="flex justify-between mt-1 items-center">
      <div class="text-xl">From {{ props.product.price + "$" }}</div>

      <Button class="w-24 bg-green-200/90 text-green-600 hover:text-green-900"
        >+ Add</Button
      >
    </div>
  </div>
</template>

<style scoped></style>
