<template>
  <section id="experience" class="max-w-5xl mx-auto px-4 mt-24">
    <h3 class="text-2xl font-semibold mb-6">Professional Experience</h3>
    <ol class="relative border-l border-gray-700 pl-6 space-y-10">
      <li v-for="(item, index) in experiences" :key="index">
        <span class="absolute -left-3 top-1.5 w-3 h-3 bg-brand rounded-full"></span>
        <time class="text-sm text-gray-400">
          {{ item.start }} – {{ item.end || 'Present' }}
        </time>
        <h4 class="font-bold">
          {{ item.position }} @
          <a :href="item.companyUrl" class="underline hover:text-brand" target="_blank">
            {{ item.company }}
          </a>
        </h4>
        <p class="italic text-sm text-gray-500 mt-1">
          {{ item.location }} &mdash; {{ item.companyDescription }}
        </p>
        <ul class="list-disc list-inside mt-3 text-sm text-gray-300 space-y-1">
          <li v-for="(task, idx) in item.tasks" :key="idx">{{ task }}</li>
        </ul>
      </li>
    </ol>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

interface Experience {
  position: string;
  company: string;
  companyUrl: string;
  start: string;
  end?: string;
  location: string;
  companyDescription: string;
  tasks: string[];
}

export default defineComponent({
  name: 'ExperienceTimeline',
  props: {
    experiences: {
      type: Array as PropType<Experience[]>,
      required: true
    }
  }
});
</script>
