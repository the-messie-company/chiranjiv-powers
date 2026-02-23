<template>
  <section class="relative bg-night-800 border-y border-solar-400/20 overflow-hidden">

    <!-- Top glow line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar-400 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          ref="statEls"
          class="animate-fade-up flex flex-col items-center gap-2 text-center"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <!-- Number -->
          <span
            class="text-5xl font-black text-solar-400 tabular-nums"
            :style="{ filter: 'drop-shadow(0 0 20px rgba(234,179,8,0.5))' }"
          >{{ stat.display }}</span>

          <!-- Divider -->
          <div class="w-8 h-px bg-solar-400/30"></div>

          <!-- Label -->
          <span class="font-mono text-xs text-night-400 uppercase tracking-widest">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <!-- Bottom glow line -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar-400/50 to-transparent"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const statEls = ref([])

const stats = [
  { display: '500+', label: 'Projects Completed' },
  { display: '25MW', label: 'Capacity Installed' },
  { display: '15+', label: 'Years Experience' },
  { display: '98%', label: 'Client Retention' },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.2 }
  )

  statEls.value.forEach(el => { if (el) observer.observe(el) })
})
</script>
