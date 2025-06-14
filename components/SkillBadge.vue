<template>
  <li
    class="px-4 py-2 border border-gray-700 rounded-lg hover:bg-brand hover:text-amber-200 transition relative group"
  >
    {{ skill.name }}
    <div
      class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block
             bg-gray-800 text-white text-sm p-2 rounded shadow-lg whitespace-nowrap z-10
             opacity-0 group-hover:opacity-100 transition-opacity duration-150"
    >
      {{ skill.description }}
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'SkillBadge',
  props: {
    skill: {
      type: Object as PropType<{ name: string; description: string }>,
      required: true
    }
  }
});
</script>
