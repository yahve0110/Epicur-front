<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Checkbox from "./ui/checkbox/Checkbox.vue";
import { useFilterStore } from "~/store/productFilters";

const filterStore = useFilterStore();

// Define ingredient categories type
type IngredientCategory = {
  name: string;
};

// State variables
const showAll = ref(false);
const ingredientCategories = ref<IngredientCategory[]>([]);

// Fetch data on mount

const { data, error } = await useFetch<IngredientCategory[]>(
  "http://localhost:8080/api/v1/ingredients"
);
if (error.value) {
  console.error("Failed to fetch ingredient categories:", error.value);
}

ingredientCategories.value = data.value || [];

const categoriesToShow = computed(() => {
  return showAll.value
    ? ingredientCategories.value
    : ingredientCategories.value.slice(0, 6);
});

const ingredients = ref<string[]>([]);

const handleCheckBoxClick = (category: string) => {
  console.log("category", category);
  if (ingredients.value.includes(category)) {
    ingredients.value = ingredients.value.filter((item) => item !== category);
  } else {
    ingredients.value.push(category);
  }
  filterStore.setIngredients(ingredients.value.join(","));
};

function handleShowAll() {
  showAll.value = !showAll.value;
}
</script>

<template>
  <div class="mt-3">
    <p>Ingredients:</p>

    <div class="flex flex-wrap gap-1 mt-2">
      <div
        v-for="category in categoriesToShow"
        :key="category.name"
        class="border-none w-32 h-8 text-sm flex items-center gap-2"
      >
        <Checkbox @click="handleCheckBoxClick(category.name)" />
        <span class="flex">{{ category.name }}</span>
      </div>
    </div>
    <button
      v-if="ingredientCategories.length > 6"
      @click="handleShowAll"
      class="text-sm text-green-600"
    >
      {{ showAll ? "- Show less" : "+ Show more..." }}
    </button>
  </div>
</template>
