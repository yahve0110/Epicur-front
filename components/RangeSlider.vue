<script setup lang="ts">
import { ref, watch, onMounted, nextTick, defineProps, defineEmits } from 'vue';

// Define props and emits
const props = defineProps({
  initialMin: {
    type: Number,
    required: true
  },
  initialMax: {
    type: Number,
    required: true
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 5000
  }
});

const emits = defineEmits(['update:min', 'update:max']);

// Initialize min and max values
const minValue = ref(props.initialMin);
const maxValue = ref(props.initialMax);

// Handler for range input changes
const handleRangeChange = (event: Event, isMin: boolean) => {
  const target = event.target as HTMLInputElement;
  const value = Number(target.value);

  if (isMin) {
    minValue.value = Math.min(value, maxValue.value);
    emits('update:min', minValue.value);
  } else {
    maxValue.value = Math.max(value, minValue.value);
    emits('update:max', maxValue.value);
  }
  updateProgress();
};

// Update the progress bar based on slider values
const updateProgress = () => {
  nextTick(() => {
    const progress = document.querySelector(".progress") as HTMLElement;
    if (progress) {
      const slider = document.querySelector(".slider") as HTMLElement;
      const sliderWidth = slider.offsetWidth;
      const minPercent = ((minValue.value - props.min) / (props.max - props.min)) * 100;
      const maxPercent = ((maxValue.value - props.min) / (props.max - props.min)) * 100;
      progress.style.width = `${maxPercent - minPercent}%`;
      progress.style.left = `${minPercent}%`;
    }
  });
};

// Watch for changes to props to update minValue and maxValue
watch(() => [props.initialMin, props.initialMax], ([newMin, newMax]) => {
  minValue.value = newMin;
  maxValue.value = newMax;
  updateProgress();
}, { immediate: true });

// Watch for changes to minValue and maxValue to update the progress
watch([minValue, maxValue], () => {
  nextTick(() => {
    updateProgress();
  });
}, { immediate: true });

// Initialize the progress bar
onMounted(() => {
  updateProgress();
});
</script>

<template>
  <div class="wrapper">
    <div class="slider">
      <div class="progress"></div>
    </div>
    <div class="range-input">
      <input
        type="range"
        class="range-min"
        :min="props.min"
        :max="props.max"
        v-model.number="minValue"
        @input="event => handleRangeChange(event, true)"
      />
      <input
        type="range"
        class="range-max"
        :min="props.min"
        :max="props.max"
        v-model.number="maxValue"
        @input="event => handleRangeChange(event, false)"
      />
    </div>
    <div class="values">
      <div class="field">
        <p>{{ minValue }}</p>
      </div>
      <div class="field">
        <p>{{ maxValue }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.values {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 15px;
}

.wrapper {
  max-width: 300px;
  margin: 0 auto;
}

.slider {
  height: 5px;
  border-radius: 5px;
  background: rgb(180, 180, 180);
  position: relative;
}

.progress {
  height: 5px;
  border-radius: 5px;
  position: absolute;
  background: rgb(16 185 129);
}

.range-input {
  position: relative;
}

.range-input input {
  position: absolute;
  top: -5px;
  height: 5px;
  width: 100%;
  background: none;
  -webkit-appearance: none;
  pointer-events: none;
}

input[type="range"]::-webkit-slider-thumb {
  height: 17px;
  width: 17px;
  -webkit-appearance: none;
  border-radius: 50%;
  background: rgb(16 185 129);
  pointer-events: auto;
  border: none;
}
</style>
