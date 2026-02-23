<template>
  <section id="services" class="relative bg-white py-24 overflow-hidden">
    <!-- Background watermark -->
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
    >
      <span class="text-night-900 font-black uppercase leading-none"
        style="font-size: 180px; opacity: 0.03; white-space: nowrap;">SERVICES</span>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-16 animate-fade-up" ref="headerEl">
        <span class="text-solar-400 text-xs font-black uppercase tracking-[0.3em] block mb-4">
          What We Offer
        </span>
        <h2 class="text-5xl lg:text-6xl font-black text-night-900 uppercase leading-tight">
          Industrial-Grade<br />
          <span class="relative inline-block">
            Solar Solutions
            <span class="absolute bottom-1 left-0 w-full h-1 bg-solar-400"></span>
          </span>
        </h2>
      </div>

      <!-- Services grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-night-200">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="animate-fade-up group relative bg-night-50 border-l-4 border-solar-400 border-r border-b border-night-200 p-8 hover:bg-solar-400 hover:text-night-900 transition-all duration-300 cursor-default"
          :ref="(el) => { if (el) cardEls[index] = el }"
        >
          <!-- Icon -->
          <div class="text-solar-400 group-hover:text-night-900 transition-colors mb-6">
            <component :is="service.icon" :size="36" :stroke-width="1.5" />
          </div>

          <!-- Title -->
          <h3 class="text-night-900 group-hover:text-night-900 font-black text-sm uppercase tracking-[0.15em] mb-3">
            {{ service.title }}
          </h3>

          <!-- Description -->
          <p class="text-night-600 group-hover:text-night-800 text-sm leading-relaxed">
            {{ service.description }}
          </p>

          <!-- Hover arrow -->
          <div class="mt-6 text-solar-400 group-hover:text-night-900 font-black text-xl transition-colors">
            &rarr;
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Sun, Home, Building2, Zap } from 'lucide-vue-next'

const headerEl = ref(null)
const cardEls = ref([])

const services = [
  {
    icon: Home,
    title: 'Residential Solar',
    description: 'Complete rooftop solar solutions for homes. From 1 kW to 10 kW systems with net metering and government subsidy assistance.',
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    description: 'High-capacity installations for offices, warehouses, and commercial complexes. Maximize ROI and reduce operational costs.',
  },
  {
    icon: Sun,
    title: 'Industrial Solar',
    description: 'Large-scale ground-mounted and rooftop systems for factories and industrial units. Engineered for maximum output.',
  },
  {
    icon: Zap,
    title: 'AMC & Servicing',
    description: 'Annual maintenance contracts, panel cleaning, inverter servicing, and performance monitoring for all installed systems.',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.15 }
  )

  if (headerEl.value) observer.observe(headerEl.value)
  cardEls.value.forEach((el, i) => {
    if (el) {
      el.style.transitionDelay = `${i * 0.1}s`
      observer.observe(el)
    }
  })
})
</script>
