<template>
  <!-- Outer white padding wrapper so the leaf-600 block has visible rounded corners -->
  <div class="bg-leaf-50 px-4 sm:px-8 lg:px-16 py-10">
    <section class="relative bg-leaf-600 rounded-3xl overflow-hidden py-16 px-6 sm:px-10">

      <!-- Subtle SVG leaf pattern background -->
      <div class="absolute inset-0 pointer-events-none opacity-10">
        <svg
          class="absolute top-4 left-6 w-16 h-16 text-white"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32 4 C48 4 60 18 60 34 C60 50 48 60 32 60 C32 60 8 44 8 24 C8 12 18 4 32 4 Z" fill="white"/>
          <path d="M32 60 L32 20" stroke="white" stroke-width="2"/>
        </svg>
        <svg
          class="absolute top-8 right-12 w-24 h-24 text-white"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M48 6 C72 6 90 26 90 50 C90 74 72 90 48 90 C48 90 10 68 10 36 C10 18 26 6 48 6 Z" fill="white"/>
          <path d="M48 90 L48 30" stroke="white" stroke-width="2.5"/>
        </svg>
        <svg
          class="absolute bottom-4 left-1/3 w-12 h-12 text-white"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 3 C36 3 45 13 45 25 C45 37 36 45 24 45 C24 45 6 33 6 18 C6 9 14 3 24 3 Z" fill="white"/>
          <path d="M24 45 L24 15" stroke="white" stroke-width="2"/>
        </svg>
        <svg
          class="absolute bottom-8 right-1/4 w-20 h-20"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M40 5 C60 5 75 22 75 42 C75 62 60 75 40 75 C40 75 8 56 8 30 C8 15 22 5 40 5 Z" fill="white"/>
          <path d="M40 75 L40 25" stroke="white" stroke-width="2"/>
        </svg>
      </div>

      <!-- Stats grid -->
      <div class="relative z-10 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          ref="statRefs"
          class="animate-fade-up"
          :style="`transition-delay: ${i * 0.12}s`"
        >
          <div class="text-4xl sm:text-5xl font-black text-white mb-2">{{ stat.value }}</div>
          <div class="text-leaf-200 font-medium text-sm sm:text-base">{{ stat.label }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const statRefs = ref([])

const stats = [
  { value: '500+', label: 'Homes Powered' },
  { value: '2 MW+', label: 'Total Capacity' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Happy Customers' },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.2 }
  )
  statRefs.value.forEach((el) => { if (el) observer.observe(el) })
})
</script>
