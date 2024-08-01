<script setup lang="ts">
import Checkbox from "./ui/checkbox/Checkbox.vue";
import Input from "./ui/input/Input.vue";
import RadioGroup from "./ui/radio-group/RadioGroup.vue";
import RadioGroupItem from "./ui/radio-group/RadioGroupItem.vue";
import { ref, watch } from "vue";
import { useFilterStore } from "~/store/productFilters";
import RangeSlider from "./RangeSlider.vue";
import debounce from "lodash/debounce"; 

const debouncedUpdateFilters = debounce(() => {
  filterStore.setMinPrice(minValue.value);
  filterStore.setMaxPrice(maxValue.value);
}, 300);

const filterStore = useFilterStore();

const checked = ref(false);
const onSiteOnly = ref(false);

const toggleVeganOnly = () => {
  checked.value = !checked.value;
  filterStore.setVeganFilter(!filterStore.isVegan);
};

const toggleOnSite = (value: boolean) => {
  onSiteOnly.value = value;
  filterStore.setOnSiteOnly(value);
};


// Range slider
const minValue = ref(5);
const maxValue = ref(50);

const minLimit = 5;
const maxLimit = 50;

const updateMinValue = (value: number) => {
  let priceToUpdate = Math.min(value, maxValue.value - 1);
  minValue.value = priceToUpdate;
  debouncedUpdateFilters();
};

const updateMaxValue = (value: number) => {
  let priceToUpdate = Math.max(value, minValue.value + 1);
  maxValue.value = priceToUpdate;
  debouncedUpdateFilters();
};

// Watchers to ensure min and max values are in the correct range
watch(
  [minValue, maxValue],
  ([newMin, newMax]) => {
    if (newMin > newMax) {
      minValue.value = newMax - 1;
    } else if (newMax < newMin) {
      maxValue.value = newMin + 1;
    }
  },
  { immediate: true }
);

// Watch for input changes and update values
const handleMinInputChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  let value = Number(input.value);
  if (value < minLimit) {
    value = minLimit;
  } else if (value > maxValue.value) {
    value = maxValue.value;
  }
  updateMinValue(value);
  input.value = value.toString(); 
};

const handleMaxInputChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  let value = Number(input.value);
  if (value > maxLimit) {
    value = maxLimit;
  } else if (value < minValue.value) {
    value = minValue.value;
  }
  updateMaxValue(value);
  input.value = value.toString();
};
</script>

<template>
  <div class="h-screen text-xl">
    <h2 class="text-3xl mb-5">Filters</h2>
    <div>
      <div class="flex items-center justify-between w-24">
        <span>Vegan</span>
        <Checkbox
          @click="toggleVeganOnly"
          class="border-none bg-gray-200 w-5 h-5"
        />
      </div>
    </div>
    <div class="mt-5 border-y border-y-neutral-100 py-6 pb-7">
      <p>Price from to :</p>
      <div class="flex justify-between mt-2 gap-3">
        <span class="flex relative">
          <Input
            type="number"
            placeholder="0"
            :min="minLimit"
            :max="maxValue"
            v-model.number="minValue"
            class="[&::-webkit-inner-spin-button]:appearance-none"
            @input="handleMinInputChange"
          />
          <Icon
            name="hugeicons:dollar-01"
            class="w-4 mr-0.5 absolute right-1 top-2.5"
          />
        </span>
        <span class="flex relative">
          <Input
            type="number"
            :min="minValue"
            :max="maxLimit"
            placeholder="1000"
            v-model.number="maxValue"
            class="[&::-webkit-inner-spin-button]:appearance-none"
            @input="handleMaxInputChange"
          />
          <Icon
            name="hugeicons:dollar-01"
            class="w-4 mr-0.5 absolute right-1 top-2.5"
          />
        </span>
      </div>

      <div class="mt-6 w-full">
        <RangeSlider
          :initialMin="minValue"
          :initialMax="maxValue"
          :min="minLimit"
          :max="maxLimit"
          @update:min="updateMinValue"
          @update:max="updateMaxValue"
        />
      </div>
    </div>

    <IngredientsList />
    <div class="mt-4">
      <RadioGroup defaultValue="Delivery">
        <div class="flex items-center space-x-2">
          <RadioGroupItem
            value="Delivery"
            id="Delivery"
            @click="toggleOnSite(false)"
          />
          <Label htmlFor="Delivery">Delivery</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem
            value="onSite"
            id="onSite"
            @click="toggleOnSite(true)"
          />
          <Label htmlFor="onSite">On site</Label>
        </div>
      </RadioGroup>
      <!-- <Button class="mt-8 w-full">Apply</Button> -->
    </div>
  </div>
</template>

<style scoped></style>
