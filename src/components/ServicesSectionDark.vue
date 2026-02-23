<template>
  <section id="services" class="relative bg-night-900 py-24 lg:py-32 overflow-hidden">

    <!-- Dotted Grid Background -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="services-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#94A3B8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#services-grid)" />
      </svg>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="mb-16 animate-fade-up" ref="headerEl">
        <span class="font-mono text-cyan-400 text-sm tracking-widest">// services</span>
        <h2 class="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
          Everything Solar,<br />
          <span class="text-solar-400">Engineered Right</span>
        </h2>
        <p class="mt-4 text-night-400 text-lg max-w-xl">
          From initial assessment to long-term monitoring — our full-stack solar solutions are built to last decades.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          ref="cardEls"
          class="animate-fade-up group relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-solar-400/40 rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300 hover:bg-white/[0.08] cursor-default"
          :style="{ transitionDelay: `${index * 0.08}s`, '--hover-shadow': '0 0 20px rgba(234,179,8,0.1)' }"
          @mouseenter="e => e.currentTarget.style.boxShadow = '0 0 20px rgba(234,179,8,0.1)'"
          @mouseleave="e => e.currentTarget.style.boxShadow = 'none'"
        >
          <!-- Icon -->
          <div class="w-12 h-12 bg-solar-400/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-solar-400/15 transition-colors duration-300">
            <component :is="service.icon" class="w-6 h-6 text-solar-400" />
          </div>

          <!-- Title + Desc -->
          <div>
            <h3 class="text-white font-bold text-lg mb-2">{{ service.title }}</h3>
            <p class="text-night-400 text-sm leading-relaxed">{{ service.description }}</p>
          </div>

          <!-- Feature List -->
          <ul class="flex flex-col gap-2 mt-auto">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex items-center gap-2 text-night-300 text-xs"
            >
              <CheckCircle2 class="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Sun, Home, Factory, Wrench, CheckCircle2, Zap } from 'lucide-vue-next'

const headerEl = ref(null)
const cardEls = ref([])

const services = [
  {
    icon: Home,
    title: 'Residential Solar',
    description: 'Custom rooftop solutions for homes that cut bills and boost property value.',
    features: ['Site Assessment', 'Custom Design', '25-Year Warranty'],
  },
  {
    icon: Factory,
    title: 'Commercial & Industrial',
    description: 'Large-scale installations for factories, warehouses, and office complexes.',
    features: ['Load Analysis', 'ROI Modeling', 'Turnkey Install'],
  },
  {
    icon: Sun,
    title: 'Solar Farms',
    description: 'Utility-grade ground-mounted arrays engineered for peak generation.',
    features: ['Land Survey', 'Grid Integration', 'Remote Monitoring'],
  },
  {
    icon: Wrench,
    title: 'O&M Services',
    description: 'Ongoing operations and maintenance to maximize system uptime and yield.',
    features: ['24/7 Monitoring', 'Preventive Maintenance', 'Performance Reports'],
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.1 }
  )

  if (headerEl.value) observer.observe(headerEl.value)
  cardEls.value.forEach(el => { if (el) observer.observe(el) })
})
</script>
