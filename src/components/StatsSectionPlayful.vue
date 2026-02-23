<template>
  <section class="relative py-20 bg-night-900 overflow-hidden">
    <!-- Polka dot SVG pattern -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="polka" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill="white"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#polka)"/>
    </svg>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section label -->
      <div class="text-center mb-12 animate-fade-up" ref="headerRef">
        <div class="inline-block px-4 py-1.5 rounded-full bg-white/10 text-solar-400 font-bold text-sm mb-3 border border-white/20">
          ⚡ Our Impact
        </div>
        <h2 class="text-3xl sm:text-4xl font-black text-white">
          Numbers That Matter
        </h2>
      </div>

      <!-- Stats grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center animate-fade-up"
          :class="stat.bg"
          :style="{ transitionDelay: `${index * 0.1}s` }"
          :ref="el => { if (el) statRefs[index] = el }"
        >
          <div class="text-4xl mb-2">{{ stat.emoji }}</div>
          <div class="text-4xl sm:text-5xl font-black text-night-900 leading-none mb-2">
            {{ stat.prefix }}{{ displayValue(index) }}{{ stat.suffix }}
          </div>
          <div class="text-night-800 font-semibold text-sm sm:text-base">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)
const statRefs = ref([])
const counters = ref([0, 0, 0, 0])

const stats = [
  { label: 'Projects Completed', target: 50, prefix: '', suffix: '+', emoji: '🏠', bg: 'bg-solar-400' },
  { label: 'kW Installed', target: 500, prefix: '', suffix: '+', emoji: '⚡', bg: 'bg-leaf-400' },
  { label: 'Happy Customers', target: 98, prefix: '', suffix: '%', emoji: '😊', bg: 'bg-orange-400' },
  { label: 'Years Experience', target: 8, prefix: '', suffix: '+', emoji: '🌟', bg: 'bg-sky-300' },
]

function displayValue(index) {
  return counters.value[index]
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
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          const idx = statRefs.value.indexOf(entry.target)
          if (idx !== -1) {
            setTimeout(() => animateCounter(idx, stats[idx].target, 1800 + idx * 150), 200)
          }
        }
      })
    },
    { threshold: 0.3 }
  )
  if (headerRef.value) observer.observe(headerRef.value)
  statRefs.value.forEach((el) => { if (el) observer.observe(el) })
})
</script>
