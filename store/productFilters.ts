// stores/filterStore.ts
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilterStore = defineStore("filterStore", () => {
  // Define reactive state
  const isVegan = ref(false);
  const onSiteOnly = ref(false);
  const minPrice = ref(0);
  const maxPrice = ref(1000);
  const ingredients = ref<string>("");
  const sortOrder = ref("")

  function setSortOrder(order: string) {
    sortOrder.value = order;
  }

  function setIngredients(ingrs: string) {
    ingredients.value = ingrs
    
  }

  function setVeganFilter(value: boolean) {
    isVegan.value = value;
  }

  function setOnSiteOnly(value: boolean) {
    onSiteOnly.value = value;
  }

  // Function to update the minimum price filter
  function setMinPrice(value: number) {
    minPrice.value = value;
  }

  // Function to update the maximum price filter
  function setMaxPrice(value: number) {
    maxPrice.value = value;
  }

  // Optionally, you can include a method to reset all filters
  function resetFilters() {
    isVegan.value = false;
    minPrice.value = 0;
    maxPrice.value = 1000;
  }

  return {
    isVegan,
    minPrice,
    maxPrice,
    setVeganFilter,
    setMinPrice,
    setMaxPrice,
    resetFilters,
    setOnSiteOnly,
    onSiteOnly,
    ingredients,
    setIngredients,
    setSortOrder,
    sortOrder
  };
});
