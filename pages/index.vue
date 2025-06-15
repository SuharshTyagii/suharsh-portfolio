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
  <ExperienceTimeline :experiences="experiences" />


  <!-- ===== Blog (placeholder) ===== -->
  <section id="blog" class="max-w-5xl mx-auto px-4 mt-24">
    <a class="text-2xl font-semibold mb-6 underline" href="https://medium.com/@suharshtyagi">Find me on
      Medium</a>
    <p class="text-gray-400">Thoughts on life, tech & leadership.</p>
  </section>

  <!-- ===== Contact ===== -->
 <section id="contact" class="max-w-5xl mx-auto px-4 mt-24 mb-32">
    <h3 class="text-2xl font-semibold mb-6">Get in touch</h3>
    <div class="flex gap-6 text-3xl">
      <a
        v-for="s in socials"
        :key="s.url"
        :href="s.url"
        target="_blank"
        class="hover:text-brand text-red-400 transition transform hover:-translate-y-1"
      >
        <Icon :name="s.icon" />
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillBadge from '~/components/SkillBadge.vue';
import ProjectCard from '~/components/ProjectCard.vue';
import ExperienceTimeline from '~/components/ExperienceTimeline.vue';
interface Social {
  icon: string;
  url: string;
}

export default defineComponent({
  name: "Index",
  components: { SkillBadge, ProjectCard, ExperienceTimeline },
  data() {
    return {
      texts: ["Secure", "Fast", "Reliable"] as string[],
      currentText: 0 as number,
      stack: [
      
    { "name": "NodeJS", "description": "JavaScript runtime built on Chrome’s V8 engine. Used extensively in backend systems to build APIs, real-time services, and scalable server-side logic across multiple client projects." },
    { "name": "VueJS", "description": "Progressive frontend framework for building SPAs. Used in multiple client-facing dashboards and admin tools. Suharsh built entire UI workflows and integrated complex form wizards and real-time updates." },
    { "name": "NuxtJS", "description": "Vue-based meta-framework enabling SSR, SSG, and static-site generation. Utilized to build SEO-friendly sites and dashboard systems such as Wiserrr.com." },
    { "name": "ReactJS", "description": "Component-based frontend library used for performant UI development. Used extensively in CRM projects and company tools." },
    { "name": "NextJS", "description": "React meta-framework enabling SSR, routing, API routes, and static generation. Used for rapidly deploying production-grade, SEO-friendly apps." },
    { "name": "JavaScript", "description": "Core web language used across frontend/backend codebases. Mastery shown across all stacks, including async patterns, closures, and real-time event flows." },
    { "name": "TypeScript", "description": "Strongly typed JavaScript superset enabling safer, maintainable code. Used across all professional and personal projects to enforce type safety and scale." },
    { "name": "NestJS", "description": "Opinionated Node.js framework built with TypeScript. Used to build modular, maintainable backend microservices on AWS EKS." },
    { "name": "Docker", "description": "Containerization platform used for isolating services and ensuring reproducibility. Migrated several monolithic apps to Docker-based microservice environments." },
    { "name": "Kubernetes (EKS)", "description": "Managed K8s on AWS. Led EKS cluster deployments, performed Helm-based rollouts, configured autoscaling, and managed service mesh for Roadslink and Wahve projects." },
    { "name": "AWS (EC2, S3, RDS, Lightsail)", "description": "Full AWS stack experience – EC2 for compute, RDS for databases, S3 for assets, Lightsail for initial staging setups. Migrated critical infrastructure between services." },
    { "name": "Jenkins", "description": "CI/CD tool used for automating deployment pipelines. Implemented Jenkins-based workflows in early CRM projects." },
    { "name": "Flask", "description": "Python web framework used for quick prototyping and REST APIs. Used during POCs and internal automation scripts." },
    { "name": "Django", "description": "Python web framework with batteries-included approach. Used for CRM projects and quick admin dashboard generation." },
    { "name": "GitHub Actions", "description": "CI/CD automation platform integrated into most of Suharsh’s codebases for tests, linting, and deployments to AWS or DigitalOcean." },
    { "name": "CI/CD pipelines", "description": "Designed and deployed CI/CD systems across GitHub Actions, Jenkins, and AWS CodePipeline. Reduced delivery time by 65%." },
    { "name": "MongoDB", "description": "NoSQL document store used across projects like Wiserrr.com and CRM platforms for unstructured and semi-structured data." },
    { "name": "PostgreSQL", "description": "Relational database used for strong data integrity systems. Employed in apps requiring transactional consistency." },
    { "name": "MySQL", "description": "Used in various legacy systems. Worked on optimization and migration efforts." },
    { "name": "MariaDB", "description": "Drop-in MySQL replacement. Used in Roadslink infrastructure for managed services behind Dockerized microservices." },
    { "name": "Azure", "description": "Used in MSR CRM project – deployed services, setup authentication workflows, and integrated with Azure email & alerting stack." },
    { "name": "Shell scripting", "description": "Used to automate Docker installations, server configurations, cron jobs, and log rotations in multiple projects." },
    { "name": "Apache Kafka", "description": "Used to stream events in decoupled systems where reliability and fault-tolerance were critical." },
    { "name": "SQS", "description": "Amazon’s queueing system used for decoupling services and async task management in backend services." },
    { "name": "Queues", "description": "General async queues across Redis, SQS, BullMQ – used for email dispatch, webhook processing, and background tasks." },
    { "name": "NGINX", "description": "Used for reverse proxying, load balancing, and SSL termination for Nuxt and Next apps hosted on EC2 and Docker." },
    { "name": "Apache", "description": "Classic HTTP server used occasionally for legacy deployments." },
    { "name": "Microservices", "description": "Refactored monoliths to microservices for Roadslink and Wahve. Handled DB separation, service discovery, and scaling." },
    { "name": "Redis", "description": "Used for caching, pub/sub patterns, session storage, and rate limiting in real-time systems." },
    { "name": "Helm", "description": "Used to package and deploy Kubernetes applications. Created charts for EKS clusters." },
    { "name": "Terraform", "description": "Infrastructure as Code – used for provisioning VPCs, EC2 instances, RDS, IAM roles, and more." },
    { "name": "Prometheus + Grafana", "description": "Set up observability stack with Prometheus exporters and Grafana dashboards to monitor application health." },
    { "name": "Serverless", "description": "Used to deploy Lambda functions, cron tasks, and API endpoints without managing servers." },
    { "name": "Lambda", "description": "Deployed Alexa skills and automation jobs using AWS Lambda. CoinsofTime.io used Lambda and Firebase integration." },
    { "name": "REST APIs", "description": "Designed and consumed REST APIs across all platforms. Strong adherence to OpenAPI spec and versioning best practices." },
    { "name": "GraphQL", "description": "Used Apollo GraphQL to fetch nested data and reduce over-fetching in frontend-heavy apps." },
    { "name": "Websockets", "description": "Used for real-time messaging, notifications, and live updates in apps like mentorpedia.io." },
    { "name": "Socket.io", "description": "Built full-scale messaging and notification services across web and mobile using Socket.IO. Led backend architecture for mentorpedia.io's real-time services." },
    { "name": "OAuth2", "description": "Implemented authentication and authorization via OAuth2 flows for both internal and external integrations." },
    { "name": "Elasticsearch", "description": "Set up Elasticsearch indexing and querying for faster full-text search in large datasets." },
    { "name": "Agile/Scrum/Kanban", "description": "Worked across SCRUM teams in 2-week sprints, conducting demos, planning, and retros in international teams." },
    { "name": "Data structures & Algorithms", "description": "Practiced DSA in Python regularly to keep problem-solving skills sharp. Comfortable with Leetcode, Trees, Graphs, DP." },
    { "name": "TailwindCSS", "description": "Used for building fast, responsive UIs with utility classes. Applied across personal and freelance projects." },
    { "name": "Pinia/Vuex/Redux Toolkit", "description": "Managed app-wide state across Vue and React apps. Migrated older Vuex apps to Pinia for better modularity." },
    { "name": "i18n", "description": "Implemented internationalization for multi-language support using vue-i18n and next-i18next in client apps." },
    { "name": "DigitalOcean", "description": "Used as cost-efficient alternative to AWS for hobby and freelance projects. Deployed Nuxt/Next sites via Docker on droplets." },
    { "name": "PlaywrightJS", "description": "Built browser automation runners that simulate workflows. Used Playwright to reduce manual QA and streamline testing." },
    { "name": "Jest", "description": "Wrote unit tests for frontend and backend logic in React/Nest apps. Integrated with CI to block faulty merges." },
    { "name": "Cypress", "description": "E2E testing library for frontend components. Used to test user flows and critical paths in production apps." },
    { "name": "OpenAI", "description": "Used OpenAI API to build GPT-based tools like ShellyAI. Won hackathon credits and led creative agent workflows." },
    { "name": "LLM", "description": "Integrated OpenRouter and other gateways to run open-source LLMs for prompt iteration, summarization, and chatbot tools." },
    { "name": "n8n", "description": "Built custom workflows like parsing Gmail for eCommerce orders and visualizing item frequency per app." },
    { "name": "Chrome extensions", "description": "Developed extensions for browsing enhancements, including prompt previewers and task managers." },
    { "name": "Alexa applications", "description": "Built private Alexa skill called CoinsofTime.io using AWS Lambda and Firebase DB to track productivity via voice." }

      ] as Skill[],
      socials: [
        { icon: "i-simple-icons-github", url: "https://github.com/SuharshTyagii" },
        { icon: "i-simple-icons-linkedin", url: "https://www.linkedin.com/in/suharshh/" },
        { icon: "i-simple-icons-twitter", url: "https://twitter.com/suharshh" },
        { icon: "i-simple-icons-reddit", url: "https://reddit.com/u/gdkalonda" },
        { icon: "i-simple-icons-medium", url: "https://medium.com/@suharshtyagi" }

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

      ],
      experiences: [
        {
          position: 'Senior Consultant (Developer)',
          company: 'Brickred Systems India Pvt Ltd',
          companyUrl: 'https://www.brickred.com',
          start: 'Sep 2021',
          end: 'Present',
          location: 'Noida, India',
          companyDescription: 'US Based Software Consulting Firm with 12+ Offices Worldwide',
          tasks: [
            'Spearheaded development of multiple web applications using VueJS/NuxtJS, NodeJS, and ReactJS, consistently delivering ahead of deadlines.',
            'Designed CI/CD pipelines, reducing deployment time by 65% and minimizing production bugs.',
            'Mentored junior developers, resulting in a 30% improvement in code quality.',
            'Led system architecture modernization using Kubernetes on AWS.',
            'Worked on 4 client projects (3 in USA, 1 in UAE) including mentoripedia.io and an internal CRM platform.'
          ]
        },
        {
          position: 'Senior Developer & DevOps Engineer',
          company: 'Roadslink',
          companyUrl: 'https://www.roadslink.ae',
          start: 'Jun 2024',
          end: 'Apr 2025',
          location: 'Dubai, UAE',
          companyDescription: 'Driver Certification SaaS Platform',
          tasks: [
            'Migrated infra from AWS Lightsail to Docker/Kubernetes stack.',
            'Refactored monoliths into modular services using EC2, RDS, and S3.',
            'Led Roadslink V2 initiative to build a Coursera-like LMS.',
            'Maintained legacy Laravel-Vue app while building new features.'
          ]
        },
        {
          position: 'Software Engineer',
          company: 'Wahve Inc',
          companyUrl: 'https://www.wahve.com',
          start: 'May 2022',
          end: 'Jun 2024',
          location: 'Remote (USA)',
          companyDescription: 'Job platform for remote recruitment of seniors in the US',
          tasks: [
            'Worked on playwright test automation scripts.',
            'Built a QA automation runner in VueJS/NodeJS, reducing manual QA by 150%. Deployed it to on the kubernetes cluster, behind a VPN.',
            'Worked on microservices in NestJS deployed on AWS EKS.',
            'Led infra reliability efforts via containerization and observability.'
          ]
        },
        {
          position: 'Software Engineer',
          company: 'MSR Hardware Labs',
          companyUrl: 'https://msrhardwarelabs.com',
          start: 'Oct 2021',
          end: 'May 2022',
          location: 'India',
          companyDescription: 'CRM SaaS company focused on enterprise internal tooling',
          tasks: [
            'Built and maintained features on an internal CRM using React and NodeJS.',
            'Optimized MongoDB queries and built migration scripts.',
            'Integrated Microsoft Flow for custom notification webhooks.'
          ]
        },
        {
          position: 'Freelanced Fullstack Engineer',
          company: 'Independent / Contract',
          companyUrl: 'https://github.com/SuharshTyagii',
          start: 'Jul 2019',
          end: 'Sep 2021',
          location: 'Remote',
          companyDescription: 'Freelance projects in gaming, industrial design, and AI',
          tasks: [
            'Built Wiserrr.com, a wallpaper WYSIWYG editor in NuxtJS and NodeJS.',
            'Automated PUBG tournament management system for Gamingmonk.',
            'Won 1st place at GPT-3 Hackathon by NextGrid with project ALFEE.'
          ]
        },
        {
          position: 'Junior R&D Engineer',
          company: 'Schoogle (TGES)',
          companyUrl: 'https://tges.org',
          start: 'Jan 2019',
          end: 'Jul 2019',
          location: 'Ahmedabad, India',
          companyDescription: 'EdTech product from The Galaxy Education System',
          tasks: [
            'Joined as a fresher to work on a quiz-based mobile app.',
            'Worked on React landing pages and CMS-based content population.'
          ]
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