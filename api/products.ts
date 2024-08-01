import type { Category } from "~/components/ProductsContainer.vue";

const productsAPI = {
  getAllProducts: async function (
    isVegan: boolean,
    onSiteOnly: boolean,
    minPrice: number,
    maxPrice: number,
    ingredients: string,
    sortOrder: string
  ) {
    try {
      console.log("Making API request with isVegan:", isVegan);
      const { data, error } = await useFetch<Category[]>(
        `http://localhost:8080/api/v1/categories?veganOnly=${isVegan}&onSiteOnly=${onSiteOnly}&priceFrom=${minPrice}&priceTo=${maxPrice}&ingredients=${ingredients}&sortBy=rating&&sortOrder=${sortOrder}`
      );

      if (error.value) {
        console.error("Error fetching data:", error.value);
        return null;
      }

      console.log("Fetched data:", data.value);
      return data.value || [];
    } catch (err) {
      console.error("An error occurred while fetching products:", err);
      return null;
    }
  },
};

export default productsAPI;
