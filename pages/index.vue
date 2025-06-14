<template>
  <section class="max-w-5xl mx-auto px-4 pt-20">

    <!-- ===== Hero ===== -->
    <div class="flex flex-col-reverse md:flex-row gap-10 items-center">
      <!-- text -->
      <div class="flex-1">
        <h2 class="text-3xl sm:text-5xl font-extrabold leading-tight">
          I build, test and deploy <br>
          <span class="text-brand">
            <span class="transition-wrapper">
              <span v-for="(text, index) in texts" :key="index" v-show="currentText === index" class="rainbow-text">
                {{ text }}
              </span>
            </span>

          </span>
          <span class="text-brand"> systems.</span>
        </h2>
        <p class="mt-6 text-gray-400 max-w-xl">
          Software Developer with 6+ years across JS ecosystems, DevOps, and cloud-native infra.
          From Nuxt&nbsp;to&nbsp;Next, Bash&nbsp;to&nbsp;Kubernetes – I code, ship, and scale.
        </p>

        <!-- call-to-action buttons -->
        <div class="mt-8 flex gap-4">
          <!-- <a href="#projects"
             class="px-6 py-3 rounded-lg bg-brand border font-semibold hover:bg-brand-dim transition">
            View Projects
          </a> -->
          <!-- <a href="/resume.pdf"
             class="px-6 py-3 rounded-lg border border-brand hover:bg-brand hover:text-gray-500 transition">
            👉 My Resume
          </a> -->
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
    <h3 class="text-2xl font-semibold mb-6">Skills stack</h3>
    <ul class="flex flex-wrap gap-4 ">
      <SkillBadge v-for="skill in stack" :key="skill.name" :skill="skill" />
    </ul>
  </section>

  <!-- ===== Projects ===== -->
  <section id="projects" class="max-w-5xl mx-auto px-4 mt-24">
    <h3 class="text-2xl font-semibold mb-6">Project Lab</h3>

    <div class="grid sm:grid-cols-2 gap-8">
      <ProjectCard v-for="project in projects" :key="project.title" :title="project.title"
        :description="project.description" :url="project.url" />

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

<script lang="ts">
import { defineComponent } from "vue";
import SkillBadge from '~/components/SkillBadge.vue';
import ProjectCard from '~/components/ProjectCard.vue';
interface Social {
  icon: string;
  url: string;
}

export default defineComponent({
  name: "Index",
  components: { SkillBadge, ProjectCard },
  data() {
    return {
      texts: ["Secure", "Fast", "Reliable"] as string[],
      currentText: 0 as number,
      stack: [
        { name: "NodeJS", description: "JS runtime on Chrome’s V8, for server-side code." },
        { name: "VueJS", description: "Progressive frontend framework" },
        { name: "NuxtJS", description: "Meta-framework for SSR & static Vue apps" },
        { name: "ReactJS", description: "Component-based UI library from Facebook" },
        { name: "NextJS", description: "React meta-framework with SSR & routing" },
        { name: "JavaScript", description: "The web’s lingua franca" },
        { name: "TypeScript", description: "JS with types for better tooling" },
        { name: "NestJS", description: "Opinionated Node framework for APIs" },
        { name: "Docker", description: "Containerization platform" },
        { name: "Kubernetes (EKS)", description: "Orchestrate containers on AWS" },
        { name: "AWS (EC2, S3, RDS, Lightsail)", description: "Cloud infra & services" },
        { name: "Jenkins", description: "Automation server for CI/CD" },
        { name: "Flask", description: "Lightweight Python web framework" },
        { name: "Django", description: "Batteries-included Python framework" },
        { name: "GitHub Actions", description: "CI/CD pipelines on GitHub" },
        { name: "CI/CD pipelines", description: "Automated build/test/deploy" },
        { name: "MongoDB", description: "NoSQL document database" },
        { name: "PostgreSQL", description: "Advanced open-source relational DB" },
        { name: "MySQL", description: "Popular relational database" },
        { name: "MariaDB", description: "MySQL fork with extra features" },
        { name: "Azure", description: "Microsoft’s cloud platform" },
        { name: "Shell scripting", description: "Automate tasks via CLI scripts" },
        { name: "Apache Kafka", description: "Distributed event streaming" },
        { name: "SQS", description: "AWS queue service" },
        { name: "Queues", description: "Message-based async processing" },
        { name: "NGINX", description: "High-performance web server" },
        { name: "Apache", description: "Classic web server" },
        { name: "Microservices", description: "Decoupled service architecture" },
        { name: "Redis", description: "In-memory data store & cache" },
        { name: "Helm", description: "K8s package manager" },
        { name: "Terraform", description: "Infrastructure as code" },
        { name: "Prometheus  Grafana", description: "Monitoring & dashboards" },
        { name: "Serverless", description: "FaaS on cloud providers" },
        { name: "Lambda", description: "AWS’s serverless compute" },
        { name: "REST APIs", description: "HTTP-based services" },
        { name: "GraphQL", description: "Flexible query language for APIs" },
        { name: "Websockets", description: "Full-duplex browser/server comms" },
        { name: "Socket.io", description: "Realtime JS comms library" },
        { name: "OAuth2", description: "Authorization framework" },
        { name: "Elasticsearch", description: "Search & analytics engine" },
        { name: "Agile/Scrum/Kanban", description: "Iterative project management" },
        { name: "Data structures & Algorithms", description: "CS fundamentals" },
        { name: "TailwindCSS", description: "Utility-first CSS framework" },
        { name: "Pinia/Vuex/Redux Toolkit", description: "State management libs" },
        { name: "i18n", description: "Internationalization support" },
        { name: "DigitalOcean", description: "Developer-friendly cloud" },
        { name: "PlaywrightJS", description: "E2E testing library" },
        { name: "Jest", description: "JS unit testing framework" },
        { name: "Cypress", description: "Frontend E2E testing tool" },
        { name: "OpenAI", description: "AI API provider" },
        { name: "LLM", description: "Large language models" },
        { name: "n8n", description: "Workflow automation tool" },
        { name: "Chrome extensions", description: "Browser extension dev" },
        { name: "Alexa applications", description: "Voice skill development" }
      ] as Skill[],
      socials: [
        { icon: "i-simple-icons-github", url: "https://github.com/SuharshTyagii" },
        { icon: "i-simple-icons-linkedin", url: "https://www.linkedin.com/in/suharsh-tyagi/" },
        { icon: "i-simple-icons-twitter", url: "https://twitter.com/yourhandle" },
        { icon: "i-simple-icons-hashnode", url: "https://hashnode.com/@yourhandle" }
      ] as Social[],
      projects: [
        {
          title: "Meet ALFEE – GPT-3 Conversational AI",
          description: "Led frontend development of a GPT-3 powered chat agent that won 1st prize (100K credits) at the NextGrid.ai hackathon.",
          url: "https://github.com/SuharshTyagii/Alfee"
        },
        {
          title: "Loan Prepayment Simulator",
          description: "Interactive ReactJS app to simulate loan EMIs and prepayment scenarios. Hosted via GitHub Pages and deployed using GitHub Actions.",
          url: "https://suharshtyagii.github.io/Loan-Prepayment-Simulator/"
        },
        {
          title: "Shelly AI – CLI Chat Assistant",
          description: "Built with Node.js, this CLI tool enables users to chat with OpenAI-compatible models via OpenRouter directly in the terminal.",
          url: "https://github.com/SuharshTyagii/Shelly-AI"
        },
        {
          title: "QA Automation Runner",
          description: "Browser-controlled Play/Pause runner built on top of PlaywrightJS that cut manual QA by 150%. Built a proprietary software for Wahve.",
          url: "https://example.com/automation-runner"
        },
        {
          title: "Wiserrr – WYSIWYG Wallpaper Editor",
          description: "Built a NuxtJS-based WYSIWYG editor with NodeJS/MongoDB backend for designing and publishing custom home wallpapers.",
          url: "https://iwdist.netlify.app/webapp"
        },
        {
          title: "PUBG Tournament Management System",
          description: "Automated slot booking and end-to-end tournament management for PUBG Mobile events on GamingMonk.com, streamlining operations and reducing manual overhead.",
          url: ""
        }

      ]

       // add more entries here…
     
    };
  },
  methods: {
    startTransition() {
      setInterval(() => {
        this.currentText = (this.currentText + 1) % this.texts.length;
      }, 2000);
    },
  },
  mounted() {
    this.startTransition();
  },
});
</script>


<style scoped>
.rainbow-text {
  /* position: absolute; */
  /* left: 0; */
  /* top: 0; */
  width: 100%;
  /* background-color: rgba(128, 128, 128, 0.358); */
  padding: 5px;
  /*  font-weight: bold; */
  text-align: center;
  animation: rainbow-animation 3s linear infinite;
  /* opacity: 0; */
  transition: ease-in-out;
}

.transition-wrapper {
  display: inline-block;
  position: relative;
  height: 1em;
  line-height: 1em;
}

@keyframes rainbow-animation {
  0% {
    color: #ae0000;
  }

  20% {
    color: #c17e00;
  }

  40% {
    color: #c8c800;
  }

  60% {
    color: #008000;
  }

  80% {
    color: #0000be;
  }

  100% {
    color: #4b0082;
  }
}
</style>