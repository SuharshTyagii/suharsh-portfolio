<template>
  <li
    class="px-4 py-2 border border-gray-700 rounded-lg hover:bg-brand  transition relative group "
  >
    {{ skill.name }}
    <div
  class="absolute bottom-full left-0 mb-2 hidden group-hover:block
         bg-gray-800 text-white text-sm p-2 rounded shadow-lg z-10
         opacity-0 group-hover:opacity-100 transition-opacity duration-150
         max-w-md whitespace-normal break-words"
>
      {{ skill.description }}
      </div>
    <span class="sr-only">{{ skill.description }}</span>

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
