<template>
  <section id="why-us" class="relative py-20 bg-solar-50 overflow-hidden">
    <!-- Star confetti decorations (scattered SVG stars) -->
    <div class="absolute inset-0 pointer-events-none">
      <svg class="absolute top-8 left-8 opacity-40" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <polygon points="14,2 16.9,10.2 25.5,10.2 18.8,15.4 21.3,23.8 14,18.8 6.7,23.8 9.2,15.4 2.5,10.2 11.1,10.2" fill="#FDE047"/>
      </svg>
      <svg class="absolute top-16 right-24 opacity-40" width="20" height="20" viewBox="0 0 28 28" fill="none">
        <polygon points="14,2 16.9,10.2 25.5,10.2 18.8,15.4 21.3,23.8 14,18.8 6.7,23.8 9.2,15.4 2.5,10.2 11.1,10.2" fill="#FDE047"/>
      </svg>
      <svg class="absolute bottom-20 left-1/4 opacity-40" width="16" height="16" viewBox="0 0 28 28" fill="none">
        <polygon points="14,2 16.9,10.2 25.5,10.2 18.8,15.4 21.3,23.8 14,18.8 6.7,23.8 9.2,15.4 2.5,10.2 11.1,10.2" fill="#FDE047"/>
      </svg>
      <svg class="absolute top-1/3 right-10 opacity-40" width="24" height="24" viewBox="0 0 28 28" fill="none">
        <polygon points="14,2 16.9,10.2 25.5,10.2 18.8,15.4 21.3,23.8 14,18.8 6.7,23.8 9.2,15.4 2.5,10.2 11.1,10.2" fill="#FDE047"/>
      </svg>
      <svg class="absolute bottom-10 right-1/3 opacity-40" width="18" height="18" viewBox="0 0 28 28" fill="none">
        <polygon points="14,2 16.9,10.2 25.5,10.2 18.8,15.4 21.3,23.8 14,18.8 6.7,23.8 9.2,15.4 2.5,10.2 11.1,10.2" fill="#FDE047"/>
      </svg>
      <svg class="absolute top-24 left-1/2 opacity-30" width="14" height="14" viewBox="0 0 28 28" fill="none">
        <polygon points="14,2 16.9,10.2 25.5,10.2 18.8,15.4 21.3,23.8 14,18.8 6.7,23.8 9.2,15.4 2.5,10.2 11.1,10.2" fill="#FDE047"/>
      </svg>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- LEFT: Headline + CTA -->
        <div class="animate-fade-up" ref="leftRef">
          <div class="inline-block px-4 py-1.5 rounded-full bg-solar-200 text-night-700 font-bold text-sm mb-5 border-2 border-solar-300">
            🌟 Why Choose Us
          </div>
          <h2 class="text-4xl sm:text-5xl font-black text-night-900 leading-tight mb-6">
            We're Your
            <span class="relative inline-block">
              <span class="relative z-10">Neighbours</span>
              <span class="absolute bottom-1 left-0 w-full h-3 bg-solar-400 -z-0 rounded opacity-70"></span>
            </span>,<br/>Not Just a Vendor
          </h2>
          <p class="text-night-600 text-lg leading-relaxed mb-8 max-w-md">
            We're a local team who genuinely cares about your energy savings. We'll walk you through every step, handle all paperwork, and be there long after installation day.
          </p>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg transition-all hover:-translate-y-0.5"
            style="box-shadow: 4px 4px 0px #EA580C;"
          >
            Talk to Us Today →
          </a>
        </div>

        <!-- RIGHT: Feature cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-up" ref="rightRef" style="transition-delay: 0.15s;">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            class="bg-white rounded-2xl p-5 border-l-4 border-solar-400 shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="text-3xl mb-3">{{ feature.emoji }}</div>
            <h3 class="font-bold text-night-900 text-base mb-1">{{ feature.title }}</h3>
            <p class="text-night-600 text-sm leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const leftRef = ref(null)
const rightRef = ref(null)

const features = [
  {
    emoji: '📍',
    title: 'Truly Local',
    desc: 'Based right here in your community. We know the local grid, weather, and what works best in your area.',
  },
  {
    emoji: '💰',
    title: 'Transparent Pricing',
    desc: 'No hidden costs, no surprise bills. You get a full breakdown before we start a single thing.',
  },
  {
    emoji: '🏆',
    title: 'Certified Installers',
    desc: 'Our team is trained, certified, and experienced with the latest solar technologies.',
  },
  {
    emoji: '📞',
    title: 'Post-Install Support',
    desc: "We don't disappear after the job's done. Call us anytime — we're always here for you.",
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
  if (leftRef.value) observer.observe(leftRef.value)
  if (rightRef.value) observer.observe(rightRef.value)
})
</script>
