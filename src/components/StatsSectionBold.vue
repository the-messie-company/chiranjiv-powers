<template>
  <section class="relative bg-night-900 w-full overflow-hidden">
    <!-- Solar-400 top line -->
    <div class="h-1 w-full bg-solar-400"></div>

    <!-- Background watermark -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <span class="text-white font-black uppercase" style="font-size: 220px; opacity: 0.02; white-space: nowrap;">POWER</span>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <!-- Section label -->
      <div class="text-center mb-16 animate-fade-up" ref="labelEl">
        <span class="text-solar-400 text-xs font-black uppercase tracking-[0.3em]">By The Numbers</span>
        <h2 class="text-4xl lg:text-5xl font-black text-white uppercase mt-3">Our Impact</h2>
      </div>

      <!-- Stats grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-night-800">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="animate-fade-up bg-night-900 p-10 text-center group hover:bg-night-800 transition-colors duration-300"
          :ref="(el) => { if (el) statEls[index] = el }"
        >
          <!-- Big stat number -->
          <div class="text-6xl lg:text-7xl font-black text-solar-400 leading-none mb-3 group-hover:scale-105 transition-transform duration-300">
            {{ stat.number }}
          </div>
          <!-- Unit suffix if any -->
          <div v-if="stat.unit" class="text-solar-400 font-black text-2xl -mt-4 mb-2">{{ stat.unit }}</div>
          <!-- Label -->
          <div class="text-night-400 text-xs font-bold uppercase tracking-[0.25em] leading-relaxed">
            {{ stat.label }}
          </div>
          <!-- Thin accent line -->
          <div class="mt-4 mx-auto w-8 h-0.5 bg-solar-400 opacity-50 group-hover:w-16 transition-all duration-300"></div>
        </div>
      </div>
    </div>

    <!-- Solar-400 bottom line -->
    <div class="h-1 w-full bg-solar-400 opacity-30"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const labelEl = ref(null)
const statEls = ref([])

const stats = [
  { number: '50+', unit: null, label: 'Projects Completed' },
  { number: '500+', unit: 'kW', label: 'Clean Energy Installed' },
  { number: '₹2Cr+', unit: null, label: 'Customer Savings' },
  { number: '5+', unit: null, label: 'Years of Excellence' },
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
    { threshold: 0.2 }
  )

  if (labelEl.value) observer.observe(labelEl.value)
  statEls.value.forEach((el, i) => {
    if (el) {
      el.style.transitionDelay = `${i * 0.12}s`
      observer.observe(el)
    }
  })
})
</script>
