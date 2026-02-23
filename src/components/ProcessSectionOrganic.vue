<template>
  <section id="process" class="bg-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Header -->
      <div class="text-center mb-16">
        <div ref="labelRef" class="animate-fade-up flex items-center justify-center gap-2 mb-4">
          <span class="w-2.5 h-2.5 rounded-full bg-leaf-600 inline-block"></span>
          <span class="text-sm font-semibold text-leaf-600 uppercase tracking-widest">How It Works</span>
          <span class="w-2.5 h-2.5 rounded-full bg-leaf-600 inline-block"></span>
        </div>
        <h2
          ref="headRef"
          class="animate-fade-up text-4xl sm:text-5xl font-black text-night-900 mb-4 leading-tight"
          style="transition-delay: 0.1s"
        >
          Your Solar Journey in 5 Steps
        </h2>
        <p
          ref="subRef"
          class="animate-fade-up text-night-500 text-lg max-w-xl mx-auto"
          style="transition-delay: 0.15s"
        >
          We make switching to solar simple, stress-free, and surprisingly enjoyable.
        </p>
      </div>

      <!-- Steps: horizontal on desktop, vertical on mobile -->
      <div class="relative">
        <!-- Connector line (desktop only) -->
        <div class="hidden lg:block absolute top-[52px] left-[calc(10%+28px)] right-[calc(10%+28px)] h-0.5 bg-leaf-100 z-0"></div>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            ref="stepRefs"
            class="animate-fade-up flex flex-col items-center text-center"
            :style="`transition-delay: ${i * 0.12 + 0.2}s`"
          >
            <!-- Number circle -->
            <div class="w-16 h-16 rounded-full bg-leaf-500 flex items-center justify-center text-white text-2xl font-black mb-5 shadow-md flex-shrink-0 relative z-10">
              {{ i + 1 }}
            </div>

            <!-- Card -->
            <div class="bg-solar-50 rounded-2xl p-5 w-full shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
              <div class="w-10 h-10 rounded-full bg-leaf-100 flex items-center justify-center mb-3 mx-auto">
                <component :is="step.icon" :size="20" class="text-leaf-600" />
              </div>
              <h3 class="font-bold text-night-900 text-base mb-2">{{ step.title }}</h3>
              <p class="text-night-500 text-sm leading-relaxed">{{ step.description }}</p>
            </div>

            <!-- Leaf connector icon between steps (desktop) -->
            <div
              v-if="i < steps.length - 1"
              class="hidden lg:flex absolute items-center justify-center"
              :style="`left: calc(${(i + 1) * 20}% - 10px); top: 44px;`"
            >
              <Leaf :size="16" class="text-leaf-300" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wavy bottom divider: white to leaf-50 -->
    <div class="overflow-hidden leading-none">
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" class="block w-full">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F0FDF4" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Leaf, PhoneCall, ClipboardList, Ruler, Wrench, BarChart2 } from 'lucide-vue-next'

const labelRef = ref(null)
const headRef = ref(null)
const subRef = ref(null)
const stepRefs = ref([])

const steps = [
  {
    icon: PhoneCall,
    title: 'Free Consultation',
    description: 'Chat with our friendly energy advisors — no pressure, just helpful advice.',
  },
  {
    icon: Ruler,
    title: 'Site Assessment',
    description: 'We visit your home to measure, assess roof condition, and plan the ideal system.',
  },
  {
    icon: ClipboardList,
    title: 'Custom Design',
    description: 'Receive a tailor-made solar layout with clear savings projections and timeline.',
  },
  {
    icon: Wrench,
    title: 'Clean Installation',
    description: 'Our certified team installs your system neatly and efficiently, typically in 1–2 days.',
  },
  {
    icon: BarChart2,
    title: 'Monitor & Grow',
    description: 'Track your energy production and savings in real time through our smart app.',
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

  const elements = [labelRef.value, headRef.value, subRef.value, ...stepRefs.value]
  elements.forEach((el) => { if (el) observer.observe(el) })
})
</script>
