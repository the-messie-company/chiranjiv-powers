<template>
  <section class="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-solar-50 via-white to-leaf-50">
    <!-- Floating blob background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        class="absolute -top-24 -right-24 w-[520px] h-[520px] opacity-40"
        viewBox="0 0 520 520"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M260,40 C340,20 440,80 480,160 C520,240 510,360 440,420 C370,480 240,500 160,460 C80,420 30,320 40,220 C50,120 180,60 260,40 Z"
          fill="#FEF08A"
        />
      </svg>
      <svg
        class="absolute -bottom-16 -left-20 w-[380px] h-[380px] opacity-30"
        viewBox="0 0 380 380"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M190,30 C270,10 360,80 370,170 C380,260 310,360 220,380 C130,400 30,340 10,250 C-10,160 50,50 190,30 Z"
          fill="#BBF7D0"
        />
      </svg>
      <svg
        class="absolute top-1/3 left-1/4 w-[200px] h-[200px] opacity-20"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100,20 C140,0 180,40 190,80 C200,120 180,170 140,185 C100,200 50,190 25,155 C0,120 10,50 100,20 Z"
          fill="#FDE047"
        />
      </svg>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
      <!-- Badge -->
      <div
        ref="badgeRef"
        class="animate-fade-up inline-flex items-center gap-2 px-5 py-2 rounded-full bg-leaf-100 text-leaf-700 text-sm font-semibold mb-8 shadow-sm"
      >
        <Leaf :size="15" />
        Sustainable Energy Solutions
      </div>

      <!-- Headline -->
      <h1
        ref="headlineRef"
        class="animate-fade-up text-5xl sm:text-6xl lg:text-7xl font-black text-night-900 leading-tight mb-6"
        style="transition-delay: 0.1s"
      >
        Grow With the
        <span class="text-leaf-600"> Sun</span>
      </h1>

      <!-- Subtext -->
      <p
        ref="subRef"
        class="animate-fade-up max-w-2xl mx-auto text-lg sm:text-xl text-night-600 leading-relaxed mb-10"
        style="transition-delay: 0.2s"
      >
        Harness the warmth of the sun to power your home, reduce your carbon footprint,
        and grow your savings — naturally, sustainably, beautifully.
      </p>

      <!-- CTAs -->
      <div
        ref="ctaRef"
        class="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        style="transition-delay: 0.3s"
      >
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-leaf-600 hover:bg-leaf-700 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <Sprout :size="20" />
          Start Your Solar Journey
        </a>
        <a
          href="#services"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-leaf-200 hover:bg-leaf-300 text-leaf-700 font-semibold text-lg transition-all hover:-translate-y-0.5"
        >
          Explore Services
          <ArrowRight :size="20" />
        </a>
      </div>

      <!-- Trust Indicators -->
      <div
        ref="trustRef"
        class="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        style="transition-delay: 0.4s"
      >
        <div v-for="trust in trustItems" :key="trust" class="flex items-center gap-2 text-night-600 text-sm font-medium">
          <div class="w-5 h-5 rounded-full bg-leaf-100 flex items-center justify-center flex-shrink-0">
            <Check :size="12" class="text-leaf-600" />
          </div>
          {{ trust }}
        </div>
      </div>

      <!-- Stats Bar -->
      <div
        ref="statsRef"
        class="animate-fade-up bg-white rounded-2xl shadow-lg px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
        style="transition-delay: 0.5s"
      >
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-3xl font-black text-leaf-500 mb-1">{{ stat.value }}</div>
          <div class="text-sm text-night-500 font-medium">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Wavy divider at bottom -->
    <div class="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" class="block w-full">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Leaf, Sprout, ArrowRight, Check } from 'lucide-vue-next'

const badgeRef = ref(null)
const headlineRef = ref(null)
const subRef = ref(null)
const ctaRef = ref(null)
const trustRef = ref(null)
const statsRef = ref(null)

const trustItems = ['Certified Installers', '5-Year Warranty', 'Free Consultation']

const stats = [
  { value: '500+', label: 'Homes Powered' },
  { value: '2MW+', label: 'Capacity Installed' },
  { value: '98%', label: 'Customer Satisfaction' },
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
    { threshold: 0.1 }
  )

  const elements = [badgeRef, headlineRef, subRef, ctaRef, trustRef, statsRef]
  elements.forEach((el) => {
    if (el.value) observer.observe(el.value)
  })

  // Trigger immediately for hero (already visible on load)
  setTimeout(() => {
    elements.forEach((el) => {
      if (el.value) el.value.classList.add('visible')
    })
  }, 100)
})
</script>
