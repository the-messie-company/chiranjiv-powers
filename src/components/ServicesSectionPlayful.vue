<template>
  <section id="services" class="py-20 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="text-center mb-14 animate-fade-up" ref="headerRef">
        <div class="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-500 font-bold text-sm mb-4 border-2 border-orange-200">
          🔧 What We Do
        </div>
        <h2 class="text-4xl sm:text-5xl font-black text-night-900 leading-tight">
          Solar Solutions for
          <span class="relative inline-block">
            <span class="relative z-10">Every Need</span>
            <span class="absolute bottom-1 left-0 w-full h-3 bg-solar-400 -z-0 rounded-sm opacity-60"></span>
          </span>
        </h2>
        <p class="mt-4 text-night-600 text-lg max-w-xl mx-auto">
          From first consultation to final connection — we handle it all with care and expertise.
        </p>
      </div>

      <!-- Service cards grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="rounded-3xl bg-white p-6 flex flex-col gap-4 border-t-4 border-b border-l border-r border-night-100 transition-transform hover:-translate-y-1 animate-fade-up"
          :class="service.topBorder"
          :style="{ boxShadow: '4px 4px 0px 0px #FACC15', transitionDelay: `${index * 0.1}s` }"
          :ref="el => { if (el) cardRefs[index] = el }"
        >
          <!-- Icon -->
          <div
            class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
            :class="service.iconBg"
          >
            {{ service.icon }}
          </div>

          <!-- Title & Desc -->
          <div class="flex-1">
            <h3 class="text-lg font-bold text-night-900 mb-2">{{ service.title }}</h3>
            <p class="text-night-600 text-sm leading-relaxed">{{ service.description }}</p>
          </div>

          <!-- Link -->
          <a
            href="#contact"
            class="text-orange-500 font-bold text-sm hover:text-orange-600 transition-colors mt-1"
          >
            Learn more →
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)
const cardRefs = ref([])

const services = [
  {
    icon: '🏠',
    title: 'Residential Solar',
    description: 'Power your home with clean, affordable solar energy. We design systems to match your household needs and roof type.',
    topBorder: 'border-t-solar-400',
    iconBg: 'bg-solar-100',
  },
  {
    icon: '🏭',
    title: 'Commercial Solar',
    description: 'Scale up your energy savings with rooftop and ground-mounted commercial installations for businesses of all sizes.',
    topBorder: 'border-t-leaf-400',
    iconBg: 'bg-leaf-100',
  },
  {
    icon: '🔋',
    title: 'Battery Storage',
    description: "Keep the lights on after sunset. Our battery solutions store excess solar energy so you're never left in the dark.",
    topBorder: 'border-t-orange-400',
    iconBg: 'bg-orange-100',
  },
  {
    icon: '🔧',
    title: 'Maintenance & AMC',
    description: 'Annual maintenance contracts to keep your panels at peak performance — inspections, cleaning, and quick repairs.',
    topBorder: 'border-t-sky-400',
    iconBg: 'bg-sky-100',
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
  cardRefs.value.forEach((el) => { if (el) observer.observe(el) })
})
</script>
