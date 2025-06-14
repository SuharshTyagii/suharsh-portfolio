<script setup lang="ts">
const socials = [
  { icon: 'i-simple-icons-github', url: 'https://github.com/SuharshTyagii' },
  { icon: 'i-simple-icons-linkedin', url: 'https://www.linkedin.com/in/suharsh-tyagi/' },
  { icon: 'i-simple-icons-twitter', url: 'https://twitter.com/yourhandle' },
  { icon: 'i-simple-icons-hashnode', url: 'https://hashnode.com/@yourhandle' }
]
const stack = ['NodeJS', 'VueJS', 'NuxtJS', 'ReactJS', 'Kubernetes', 'AWS', 'CI/CD', 'Microservices']
</script>

<template>
  <section class="max-w-5xl mx-auto px-4 pt-20">

    <!-- ===== Hero ===== -->
    <div class="flex flex-col-reverse md:flex-row gap-10 items-center">
      <!-- text -->
      <div class="flex-1">
        <h2 class="text-3xl sm:text-5xl font-extrabold leading-tight">
          I build and deploy scalable systems.<br>
          <span class="text-brand">Fast. Secure. Reliable.</span>
        </h2>
        <p class="mt-6 text-gray-400 max-w-xl">
          Senior Software Developer with 6+ years across JS ecosystems, DevOps, and cloud-native infra.  
          From Nuxt&nbsp;to&nbsp;Next, Bash&nbsp;to&nbsp;Kubernetes – I code, ship, and scale.
        </p>

        <!-- call-to-action buttons -->
        <div class="mt-8 flex gap-4">
          <a href="#projects"
             class="px-6 py-3 rounded-lg bg-brand text-gray-900 font-semibold hover:bg-brand-dim transition">
            View Projects
          </a>
          <a href="/resume.pdf"
             class="px-6 py-3 rounded-lg border border-brand hover:bg-brand hover:text-gray-900 transition">
            Resume
          </a>
        </div>
      </div>

      <!-- profile image -->
      <div class="w-40 h-40 md:w-56 md:h-56 rounded-full ring-4 ring-brand/60 overflow-hidden">
        <img src="/avatar.jpg" alt="Your photo" class="w-full h-full object-cover">
      </div>
    </div>
  </section>

  <!-- ===== Stack Playground ===== -->
  <section id="stack" class="max-w-5xl mx-auto px-4 mt-24">
    <h3 class="text-2xl font-semibold mb-6">Stack Playground</h3>
    <ul class="flex flex-wrap gap-4">
      <li v-for="s in stack" :key="s"
          class="px-4 py-2 border border-gray-700 rounded-lg hover:bg-brand hover:text-gray-900 transition">
        {{ s }}
      </li>
    </ul>
  </section>

  <!-- ===== Projects ===== -->
  <section id="projects" class="max-w-5xl mx-auto px-4 mt-24">
    <h3 class="text-2xl font-semibold mb-6">Project Lab</h3>

    <div class="grid sm:grid-cols-2 gap-8">
      <!-- card -->
      <div class="group relative bg-gray-800 p-6 rounded-2xl overflow-hidden">
        <h4 class="text-lg font-bold">QA Automation Runner</h4>
        <p class="mt-2 text-gray-400 text-sm">
          Browser-controlled Play/Pause runner that cut manual QA by 150 %.
        </p>
        <a href="#" class="absolute inset-0"></a>
        <!-- fancy hover -->
        <div
          class="absolute -inset-0.5 bg-brand opacity-0 group-hover:opacity-10 blur transition"></div>
      </div>

      <!-- repeat more cards -->
    </div>
  </section>

  <!-- ===== Experience ===== -->
  <section id="experience" class="max-w-5xl mx-auto px-4 mt-24">
    <h3 class="text-2xl font-semibold mb-6">Professional Experience</h3>

    <ol class="relative border-l border-gray-700 pl-6 space-y-10">
      <li>
        <span class="absolute -left-3 top-1.5 w-3 h-3 bg-brand rounded-full"></span>
        <time class="text-sm text-gray-400">Sep 2021 – Present</time>
        <h4 class="font-bold">Senior Consultant @ Brickred Systems</h4>
        <p class="text-gray-400 text-sm mt-2">Kubernetes-first architecture, CI/CD pipelines, team mentoring…</p>
      </li>
      <!-- more items -->
    </ol>
  </section>

  <!-- ===== Blog (placeholder) ===== -->
  <section id="blog" class="max-w-5xl mx-auto px-4 mt-24">
    <h3 class="text-2xl font-semibold mb-6">Brain Dump / Blog</h3>
    <p class="text-gray-400">Coming soon – thoughts on DevOps, containers & tech leadership.</p>
  </section>

  <!-- ===== Contact ===== -->
  <section id="contact" class="max-w-5xl mx-auto px-4 mt-24 mb-32">
    <h3 class="text-2xl font-semibold mb-6">Get in touch</h3>
    <div class="flex gap-6 text-3xl">
      <a v-for="s in socials" :key="s.url" :href="s.url" target="_blank"
         class="hover:text-brand transition transform hover:-translate-y-1">
        <span :class="s.icon"></span>
      </a>
    </div>
  </section>
</template>
