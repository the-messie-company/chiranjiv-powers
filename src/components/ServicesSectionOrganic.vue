<template>
  <section id="services" class="bg-white relative">
    <!-- Wavy top divider: solar-50 flows into white -->
    <div class="overflow-hidden leading-none">
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" class="block w-full">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Section Label -->
      <div ref="labelRef" class="animate-fade-up flex items-center justify-center gap-2 mb-4">
        <Leaf :size="16" class="text-leaf-600" />
        <span class="text-sm font-semibold text-leaf-600 uppercase tracking-widest">What We Offer</span>
      </div>

      <!-- Headline -->
      <h2
        ref="headRef"
        class="animate-fade-up text-4xl sm:text-5xl font-black text-night-900 text-center mb-4 leading-tight"
        style="transition-delay: 0.1s"
      >
        Solar Solutions for Every Need
      </h2>
      <p
        ref="subRef"
        class="animate-fade-up text-center text-night-500 text-lg max-w-xl mx-auto mb-16"
        style="transition-delay: 0.15s"
      >
        From rooftop panels to full energy systems, we tailor every project to your home and lifestyle.
      </p>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          ref="cardRefs"
          class="animate-fade-up bg-solar-50 rounded-3xl p-6 flex flex-col shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-default overflow-hidden relative"
          :style="`transition-delay: ${0.1 * i + 0.2}s`"
        >
          <!-- Icon blob -->
          <div class="w-14 h-14 rounded-full bg-leaf-100 flex items-center justify-center mb-5 shadow-sm">
            <component :is="service.icon" :size="26" class="text-leaf-600" />
          </div>

          <h3 class="text-lg font-bold text-night-900 mb-2">{{ service.title }}</h3>
          <p class="text-night-500 text-sm leading-relaxed flex-1">{{ service.description }}</p>

          <!-- Decorative wave at card bottom -->
          <div class="mt-5 -mx-6 -mb-6 overflow-hidden">
            <svg viewBox="0 0 320 32" xmlns="http://www.w3.org/2000/svg" class="block w-full">
              <path d="M0,16 C80,32 240,0 320,16 L320,32 L0,32 Z" fill="#DCFCE7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Wavy bottom divider: white to leaf-50 -->
    <div class="overflow-hidden leading-none">
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" class="block w-full">
        <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" fill="#F0FDF4" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Leaf, Sun, Home, Battery, Zap, Wrench } from 'lucide-vue-next'

const labelRef = ref(null)
const headRef = ref(null)
const subRef = ref(null)
const cardRefs = ref([])

const services = [
  {
    icon: Home,
    title: 'Residential Solar',
    description:
      'Custom rooftop solar systems designed to match your home\'s energy needs and aesthetic, maximizing savings from day one.',
  },
  {
    icon: Zap,
    title: 'Commercial Solar',
    description:
      'Scale your business sustainably with grid-tied commercial solar arrays engineered for high performance and low maintenance.',
  },
  {
    icon: Battery,
    title: 'Battery Storage',
    description:
      'Store excess solar energy in smart battery systems so you\'re powered even when the sun takes a break.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Care',
    description:
      'Keep your system running at peak efficiency with our proactive inspection, cleaning, and repair services.',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.15 }
  )

  const elements = [labelRef.value, headRef.value, subRef.value, ...cardRefs.value]
  elements.forEach((el) => { if (el) observer.observe(el) })
})
</script>
