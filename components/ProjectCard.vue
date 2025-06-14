<template>
  <div
    class="group relative bg-gray-800 p-6 rounded-2xl overflow-hidden cursor-pointer transition-shadow hover:shadow-lg"
  >
    <!-- link covers entire card but is on top now -->
    <a
      v-if="url"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="absolute inset-0 z-10"
    ></a>

    <h4 class="text-lg font-bold relative z-20">{{ title }}</h4>
    <p class="mt-2 text-gray-400 text-sm relative z-20">{{ description }}</p>

    <!-- dual-tone animated hover layer -->
    <div
      class="absolute inset-0 z-0 transition duration-300 group-hover:opacity-100 opacity-0"
    >
      <div
        class="w-full h-full bg-gradient-to-r from-brand to-pink-500 opacity-30 blur-sm scale-110"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: ''
    }
  }
});
</script>
