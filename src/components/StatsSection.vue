<template>
  <section class="py-16 bg-solar-400">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          :ref="el => statRefs[i] = el"
          class="flex flex-col items-center text-center animate-fade-up"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <div class="flex items-center gap-1 mb-1">
            <span class="text-4xl sm:text-5xl lg:text-6xl font-black text-night-900">
              {{ stat.prefix }}{{ counters[i] }}{{ stat.suffix }}
            </span>
          </div>
          <span class="text-sm sm:text-base font-semibold text-night-700 uppercase tracking-wide">
            {{ stat.label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const stats = [
  { label: 'Projects Completed', target: 50, prefix: '', suffix: '+' },
  { label: 'kW Installed', target: 500, prefix: '', suffix: '+' },
  { label: 'Satisfied Clients', target: 100, prefix: '', suffix: '%' },
  { label: 'Year Warranty', target: 5, prefix: '', suffix: ' Yr' },
]

const counters = ref(stats.map(() => 0))
const statRefs = ref([])
let animated = false

function animateCounter(index, target, duration = 1600) {
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        if (!animated) {
          animated = true
          stats.forEach((stat, i) => animateCounter(i, stat.target, 1600 + i * 150))
        }
      }
    })
  }, { threshold: 0.3 })

  statRefs.value.forEach(el => { if (el) observer.observe(el) })
})
</script>
