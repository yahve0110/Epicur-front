<script setup lang="ts">
import { ref, watch } from "vue";
import ProductsContainer, { type Category } from "~/components/ProductsContainer.vue";
import Filters from "~/components/Filters.vue";
import UpperMenu from "~/components/UpperMenu.vue";
import productsAPI from "~/api/products";
import { useFilterStore } from "~/store/productFilters";

const filterStore = useFilterStore();
const products = ref<Category[]>([]);
const error = ref<string | null>(null);
const isLoading = ref<boolean>(false);

async function fetchProducts() {
  console.log("Fetching products...");
  isLoading.value = true;
  error.value = null;

  const { isVegan, onSiteOnly, minPrice, maxPrice, ingredients, sortOrder } = filterStore;

  try {
    const fetchedProducts = await productsAPI.getAllProducts(
      isVegan, onSiteOnly, minPrice, maxPrice, ingredients, sortOrder
    );

    if (fetchedProducts) {
      products.value = fetchedProducts;
    } else {
      error.value = "Failed to fetch products";
    }
  } catch (err) {
    error.value = "An error occurred while fetching products";
    console.error(err);
  } finally {
    isLoading.value = false;
  }
}

fetchProducts();

watch(
  () => [
    filterStore.isVegan,
    filterStore.minPrice,
    filterStore.maxPrice,
    filterStore.onSiteOnly,
    filterStore.ingredients,
    filterStore.sortOrder,
  ],
  async () => {
    await fetchProducts();
  }
);
</script>

<template>
  <div>
    <UpperMenu v-if="products" :products="products" />
    <div class="grid grid-cols-[1fr_6fr] gap-20 p-6 bg-white py-5 shadow-lg shadow-black/5">
      <Filters />
      <div v-if="isLoading" class="text-center col-span-2">Loading...</div>
      <div v-else-if="error" class="text-center col-span-2 text-red-500">{{ error }}</div>
      <ProductsContainer v-else :products="products" />
    </div>
  </div>
</template>

<style scoped>
/* Additional styles can be added here if needed */
</style>
