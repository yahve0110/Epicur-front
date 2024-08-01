<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref, watch, onMounted } from "vue";
import { useCounterStore } from "~/store/store";
import type { Category } from "./ProductsContainer.vue";
import { useFilterStore } from "~/store/productFilters";

const filterStore = useFilterStore();

const props = defineProps<{
  products: Category[];
}>();

const store = useCounterStore();
const { count } = storeToRefs(store);
const { setCount } = store;

const categories = ref<Category[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);

onMounted(() => {
  categories.value = props.products.filter((category) => category.products.length > 0);
  
  if (categories.value.length > 0) {
    const id = categories.value[0].id;
    setCount(id);
  } else {
    console.warn("No categories with products found.");
    error.value = "No categories available.";
  }

  isLoading.value = false;
});

const activeCat = ref(count.value);

watch(count, (newCount) => {
  activeCat.value = newCount;
});

const sortOrder = ref('desc');

const handleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  filterStore.setSortOrder(sortOrder.value);
};
</script>

<template>
  <div class="px-8 mt- mb-6 sticky top-0 bg-white py-5 shadow-black/5 z-10">
    <h2 class="text-3xl mb-3">All dishes</h2>
    <div v-if="isLoading" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else class="flex justify-between">
      <div class="bg-gray-200 h-12 flex rounded-2xl relative items-center gap-1 p-5 w-max transition-all duration-200 ease-in-out">
        <a
          v-for="item in categories"
          :key="item.id"
          :class="{
            'bg-gray-100 rounded-xl shadow-lg text-green-400 transition-colors duration-200 ease-in-out': item.id === activeCat,
            'text-black': item.id !== activeCat,
          }"
          class="py-1 rounded cursor-pointer transition-colors duration-200 px-5 ease-in-out"
          :href="`#${item.id}`"
        >
          {{ item.categoryName }}
        </a>
      </div>
      <div class="p-1.5 px-2 text-sm bg-gray-200 rounded-xl flex items-center cursor-pointer" @click="handleSortOrder">
   
        <span>Sort by </span>
        <span class="text-md ml-1 text-green-500"> rating</span>
        <Icon
        :name="sortOrder === 'asc' ? 'tabler:arrows-down-up' :'tabler:arrows-down-up'"
        class="w-4 mr-0.5 ml-1"
      />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
