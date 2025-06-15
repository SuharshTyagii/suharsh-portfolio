<script setup lang="ts">
const nav = [
  { label: 'Stack', to: '#stack' },
  { label: 'Projects', to: '#projects' },
  { label: 'Experience', to: '#experience' },
  { label: 'Blog', to: '#blog' },
  { label: 'Contact', to: '#contact' }
]
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-gray-200 font-sans scroll-smooth">
    <!-- ===== Top nav ===== -->
    <header class="sticky top-0 z-50 backdrop-blur bg-gray-900/70">
      <div class="mx-auto max-w-5xl flex items-center justify-between p-4">
        <h1 class="text-xl font-bold tracking-tight">
          <NuxtLink to="/" class="hover:text-brand">Suharsh Tyagi</NuxtLink>
        </h1>
        <nav class="hidden sm:flex gap-6">
          <NuxtLink v-for="n in nav" :key="n.to" :to="n.to"
            class="hover:text-brand transition-colors duration-200">
            {{ n.label }}
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- page content rendered here -->
    <NuxtPage />

    <!-- ===== footer ===== -->
    <footer class="mt-20 py-10 bg-gray-800/70">
      <div class="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-6 text-sm">
        <span>&copy; {{ new Date().getFullYear() }} Suharsh Tyagi</span>
        <span class="space-x-4">
          <a class="hover:text-brand" href="https://github.com/SuharshTyagii" target="_blank">GitHub</a>
          <a class="hover:text-brand" href="https://www.linkedin.com/in/suharsh-tyagi/" target="_blank">LinkedIn</a>
          <a class="hover:text-brand" href="mailto:suharsh96@gmail.com">Email</a>
          <a class="hover:text-brand" href="tel:+918265826487">Call</a>
        </span>
      </div>
    </footer>
  </div>
</template>
