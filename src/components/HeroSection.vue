<template>
  <section class="relative min-h-screen flex flex-col overflow-hidden bg-night-900">
    <!-- Radial sunburst background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0" style="background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(234,179,8,0.18) 0%, rgba(15,23,42,0) 70%)"></div>
      <div class="absolute inset-0" style="background: radial-gradient(ellipse 50% 80% at 80% 50%, rgba(34,197,94,0.06) 0%, transparent 60%)"></div>
      <!-- SVG grid lines -->
      <svg class="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <!-- Main content -->
    <div class="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Tag chip -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-solar-500/20 border border-solar-500/30 text-solar-300 text-sm font-medium mb-8">
          <span>🌞</span>
          <span>Clean Energy Experts</span>
        </div>

        <!-- Headline -->
        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
          Harness the
          <span class="text-solar-400">Power</span>
          <br />of the Sun
        </h1>

        <!-- Subtext -->
        <p class="text-lg sm:text-xl text-night-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Professional solar panel installation for homes and businesses across the region.
          Reduce your electricity bills and contribute to a greener planet with Chiranjiv Powers.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            class="w-full sm:w-auto px-8 py-4 rounded-full bg-solar-500 hover:bg-solar-400 text-night-900 font-bold text-lg transition-all shadow-xl hover:shadow-solar-500/30 hover:-translate-y-1"
          >
            Get Free Quote
          </a>
          <a
            href="#services"
            class="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white/30 hover:border-white text-white font-semibold text-lg transition-all hover:bg-white/10"
          >
            Our Services
          </a>
        </div>
      </div>
    </div>

    <!-- Stats bar -->
    <div class="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="grid grid-cols-3 divide-x divide-white/10">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="flex flex-col items-center gap-1 px-4"
          >
            <span class="text-2xl sm:text-4xl font-black text-solar-400">
              {{ stat.prefix }}{{ displayValue(stat) }}{{ stat.suffix }}
            </span>
            <span class="text-xs sm:text-sm text-night-400 font-medium text-center">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const stats = [
  { label: 'Projects Completed', target: 50, prefix: '', suffix: '+', display: 0 },
  { label: 'kW Installed', target: 500, prefix: '', suffix: '+', display: 0 },
  { label: 'Client Satisfaction', target: 100, prefix: '', suffix: '%', display: 0 },
]

const counters = ref(stats.map(s => 0))

function displayValue(stat) {
  return counters.value[stats.indexOf(stat)]
}

function animateCounter(index, target, duration = 1800) {
  const start = performance.now()
  const step = (now) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    counters.value[index] = Math.round(eased * target)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  setTimeout(() => {
    stats.forEach((stat, i) => animateCounter(i, stat.target, 2000 + i * 200))
  }, 600)
})
</script>
