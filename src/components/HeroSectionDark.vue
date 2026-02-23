<template>
  <section class="relative min-h-screen bg-night-900 flex flex-col items-center justify-center overflow-hidden">

    <!-- Dotted Grid Background -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#94A3B8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
    </div>

    <!-- Radial glow center -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(250,204,21,0.05) 0%, transparent 70%);"
    ></div>

    <!-- Content -->
    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">

      <!-- Terminal Tag -->
      <div class="inline-flex items-center gap-2 mb-8 animate-fade-up" ref="tagEl">
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span class="font-mono text-xs text-cyan-400 tracking-widest">$ ./chiranjiv-powers --solar</span>
      </div>

      <!-- Headline -->
      <h1
        class="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-up"
        ref="h1El"
        style="transition-delay: 0.1s;"
      >
        Powering the Future<br />
        with
        <span
          class="text-solar-400"
          style="text-shadow: 0 0 60px rgba(250,204,21,0.6);"
        >Solar</span>
      </h1>

      <!-- Subtext -->
      <p
        class="text-night-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
        ref="subEl"
        style="transition-delay: 0.2s;"
      >
        Advanced photovoltaic systems engineered for maximum yield. From residential rooftops to industrial-scale solar farms — we build the grid of tomorrow.
      </p>

      <!-- CTAs -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-up"
        ref="ctaEl"
        style="transition-delay: 0.3s;"
      >
        <a
          href="#contact"
          class="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-night-900 bg-solar-400 hover:bg-solar-300 transition-all duration-300"
          :style="{ boxShadow: '0 0 30px rgba(250,204,21,0.4)' }"
        >
          <Zap class="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
          Initialize Consultation
        </a>
        <a
          href="#projects"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-solar-400/50 hover:bg-white/5 transition-all duration-300"
        >
          <LayoutGrid class="w-5 h-5" />
          View Projects
        </a>
      </div>

      <!-- Stats Row -->
      <div
        class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-up"
        ref="statsEl"
        style="transition-delay: 0.45s;"
      >
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-6 py-5 flex flex-col items-center gap-1 hover:border-solar-400/30 transition-all duration-300"
        >
          <span
            class="text-3xl font-black text-solar-400"
            style="text-shadow: 0 0 20px rgba(250,204,21,0.4);"
          >{{ stat.display }}</span>
          <span class="text-night-400 text-sm font-mono tracking-wide">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <!-- Bottom gradient fade -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-night-900 to-transparent pointer-events-none"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Zap, LayoutGrid } from 'lucide-vue-next'

const tagEl = ref(null)
const h1El = ref(null)
const subEl = ref(null)
const ctaEl = ref(null)
const statsEl = ref(null)

const stats = [
  { display: '500+', label: 'Installations' },
  { display: '25MW+', label: 'Capacity Deployed' },
  { display: '98%', label: 'Client Satisfaction' },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  const els = [tagEl.value, h1El.value, subEl.value, ctaEl.value, statsEl.value]
  els.forEach(el => {
    if (el) observer.observe(el)
  })
})
</script>
