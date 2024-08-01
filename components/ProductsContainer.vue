<script setup lang="ts">
import { ref, onMounted, nextTick, toRaw } from "vue";
import { useCounterStore } from "~/store/store";
import ProductCard from "./ProductCard.vue";

const props = defineProps<{
  products: Category[]
}>();

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating:number
}

export interface Category {
  id: string;
  categoryName: string;
  products: Product[];
}

const products = computed(() => props.products.filter(category => category.products.length > 0));
console.log("PRODUCTS IN CT", products);


const store = useCounterStore();
const { setCount } = store;

// Set up intersection observer
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCount(entry.target.id);

          console.log("Intersecting:", entry.target.id);
        }
      });
    },
    { threshold: 0.8 } // Adjust threshold as needed
  );

  nextTick(() => {
    document.querySelectorAll(".category").forEach((section) => {
      observer.observe(section);
    });
  });
});
</script>

<template>
  <div>
    <div v-if="products.length === 0">Loading...</div>
    <div
      v-for="category in products"
      :key="category.id"
      class="category"
      :id="category.id"
    >
      <h2 :id="category.id" class="text-3xl">{{ category.categoryName}}</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 mb-12 mt-2"
      >
        <ProductCard
          v-for="product in category.products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
h2[id] {
  padding-top: 200px;
  margin-top: -200px;
}
</style>
