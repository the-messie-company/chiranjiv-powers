<template>
  <section id="process" class="py-20 lg:py-28 bg-night-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div ref="headerRef" class="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
        <span class="inline-block px-4 py-1.5 rounded-full bg-solar-100 text-solar-700 text-sm font-semibold mb-4">
          How It Works
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-night-900 mb-4">
          Simple 5-Step Process
        </h2>
        <p class="text-night-500 text-lg leading-relaxed">
          Going solar has never been easier. We handle everything from start to finish so you can focus on enjoying clean energy.
        </p>
      </div>

      <!-- Desktop: Horizontal stepper -->
      <div class="hidden lg:block">
        <!-- Connecting line -->
        <div class="relative flex items-start justify-between mb-6">
          <div class="absolute top-8 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-0.5 border-t-2 border-dashed border-solar-300 z-0"></div>
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            :ref="el => stepRefs[i] = el"
            class="relative z-10 flex flex-col items-center w-1/5 animate-fade-up"
            :style="{ transitionDelay: `${i * 100}ms` }"
          >
            <!-- Circle -->
            <div class="w-16 h-16 rounded-full bg-solar-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-solar-500/30 mb-4 ring-4 ring-solar-100">
              {{ i + 1 }}
            </div>
            <div class="text-center px-2">
              <div class="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                <component :is="step.icon" :size="24" class="text-solar-600" />
              </div>
              <h3 class="font-bold text-night-900 text-base mb-1.5">{{ step.title }}</h3>
              <p class="text-xs text-night-500 leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile: Vertical stepper -->
      <div class="lg:hidden space-y-0">
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          :ref="el => mobileStepRefs[i] = el"
          class="flex gap-5 animate-fade-up"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <!-- Step indicator + connector -->
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-full bg-solar-500 flex items-center justify-center text-white font-black text-lg shadow-md flex-shrink-0">
              {{ i + 1 }}
            </div>
            <div v-if="i < steps.length - 1" class="flex-1 w-0.5 border-l-2 border-dashed border-solar-300 my-2"></div>
          </div>
          <!-- Content -->
          <div class="pb-8 pt-2 flex-1">
            <div class="flex items-center gap-2 mb-2">
              <component :is="step.icon" :size="18" class="text-solar-600" />
              <h3 class="font-bold text-night-900">{{ step.title }}</h3>
            </div>
            <p class="text-sm text-night-500 leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { MessageSquare, Map, Ruler, Zap, CheckSquare } from 'lucide-vue-next'

const headerRef = ref(null)
const stepRefs = ref([])
const mobileStepRefs = ref([])

const steps = [
  {
    icon: MessageSquare,
    title: 'Free Consultation',
    description: 'Talk to our solar experts about your energy needs and goals. No obligation, completely free.',
  },
  {
    icon: Map,
    title: 'Site Survey',
    description: 'Our team visits your property to assess roof condition, orientation, shading, and load requirements.',
  },
  {
    icon: Ruler,
    title: 'Custom System Design',
    description: 'We design a solar system perfectly sized for your consumption and budget with full cost-benefit analysis.',
  },
  {
    icon: Zap,
    title: 'Professional Installation',
    description: 'Certified electricians install your system safely with minimal disruption, typically within 1–3 days.',
  },
  {
    icon: CheckSquare,
    title: 'Testing & Handover',
    description: 'We commission the system, run full performance tests, and walk you through everything before handover.',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.15 })

  if (headerRef.value) observer.observe(headerRef.value)
  stepRefs.value.forEach(el => { if (el) observer.observe(el) })
  mobileStepRefs.value.forEach(el => { if (el) observer.observe(el) })
})
</script>
