<template>
  <section id="process" class="py-20 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="text-center mb-14 animate-fade-up" ref="headerRef">
        <div class="inline-block px-4 py-1.5 rounded-full bg-solar-100 text-solar-700 font-bold text-sm mb-4 border-2 border-solar-200">
          📋 How It Works
        </div>
        <h2 class="text-4xl sm:text-5xl font-black text-night-900">
          5 Simple
          <span class="relative inline-block">
            <span class="relative z-10">Steps</span>
            <span class="absolute bottom-1 left-0 w-full h-3 bg-solar-400 -z-0 rounded opacity-60"></span>
          </span>
          to Solar Bliss
        </h2>
        <p class="mt-4 text-night-600 text-lg max-w-xl mx-auto">
          Going solar is easier than you think. Here's exactly what happens after you reach out.
        </p>
      </div>

      <!-- Steps: desktop horizontal, mobile vertical -->
      <div class="relative">
        <!-- Dashed connector line (desktop only) -->
        <div class="hidden lg:block absolute top-14 left-0 right-0 h-0 pointer-events-none" style="z-index:0;">
          <svg width="100%" height="8" viewBox="0 0 900 8" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="80" y1="4" x2="820" y2="4" stroke="#FDE047" stroke-width="3" stroke-dasharray="12 8" stroke-linecap="round"/>
          </svg>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="rounded-2xl bg-white border-2 p-6 flex flex-col items-center text-center transition-transform hover:scale-[1.02] cursor-default animate-fade-up"
            :class="step.borderColor"
            :style="{ transitionDelay: `${index * 0.1}s` }"
            :ref="el => { if (el) stepRefs[index] = el }"
          >
            <!-- Big circle number -->
            <div
              class="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black text-night-900 mb-4 border-4 border-white shadow-md"
              :class="step.numberBg"
            >
              {{ index + 1 }}
            </div>

            <!-- Icon -->
            <div class="text-3xl mb-3">{{ step.icon }}</div>

            <!-- Title -->
            <h3 class="font-black text-night-900 text-base mb-2">{{ step.title }}</h3>

            <!-- Description -->
            <p class="text-night-600 text-sm leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-12 animate-fade-up" ref="ctaRef">
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-solar-400 hover:bg-solar-500 text-night-900 font-bold text-lg transition-all hover:-translate-y-0.5"
          style="box-shadow: 4px 4px 0px #A16207;"
        >
          Start Your Journey ☀️
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)
const ctaRef = ref(null)
const stepRefs = ref([])

const steps = [
  {
    icon: '📞',
    title: 'Free Consultation',
    description: "Call us or fill out the form. We'll schedule a convenient time to chat about your energy needs.",
    numberBg: 'bg-solar-400',
    borderColor: 'border-solar-300',
  },
  {
    icon: '🔍',
    title: 'Site Assessment',
    description: 'Our team visits your property to evaluate your roof, shading, and electrical setup.',
    numberBg: 'bg-leaf-400',
    borderColor: 'border-leaf-300',
  },
  {
    icon: '📐',
    title: 'Custom Design',
    description: 'We design a solar system tailored exactly to your consumption patterns and budget.',
    numberBg: 'bg-orange-400',
    borderColor: 'border-orange-300',
  },
  {
    icon: '🔨',
    title: 'Installation Day',
    description: 'Our certified crew handles everything — panels, wiring, inverter, and safety checks.',
    numberBg: 'bg-sky-300',
    borderColor: 'border-sky-300',
  },
  {
    icon: '🚀',
    title: 'Go Live & Save!',
    description: 'Flip the switch and start generating clean energy. We monitor and support you ongoing.',
    numberBg: 'bg-solar-500',
    borderColor: 'border-solar-400',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.1 }
  )
  if (headerRef.value) observer.observe(headerRef.value)
  if (ctaRef.value) observer.observe(ctaRef.value)
  stepRefs.value.forEach((el) => { if (el) observer.observe(el) })
})
</script>
