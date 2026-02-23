<template>
  <section id="why-us" class="bg-solar-50 relative">
    <!-- Wavy top divider: leaf-50 to solar-50 -->
    <div class="overflow-hidden leading-none">
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" class="block w-full">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#FEFCE8" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left column -->
        <div>
          <div ref="labelRef" class="animate-fade-up flex items-center gap-2 mb-4">
            <Leaf :size="16" class="text-leaf-600" />
            <span class="text-sm font-semibold text-leaf-600 uppercase tracking-widest">Why Choose Us</span>
          </div>
          <h2
            ref="headRef"
            class="animate-fade-up text-4xl sm:text-5xl font-black text-night-900 leading-tight mb-6"
            style="transition-delay: 0.1s"
          >
            Solar Done the
            <span class="text-leaf-600"> Right Way</span>
          </h2>
          <p
            ref="paraRef"
            class="animate-fade-up text-night-600 text-lg leading-relaxed mb-8"
            style="transition-delay: 0.2s"
          >
            We believe going solar should feel natural — no pressure, no confusing jargon,
            just honest guidance and expert installation. Your home deserves care and craftsmanship,
            and that's exactly what we bring to every project.
          </p>
          <a
            ref="ctaRef"
            href="#contact"
            class="animate-fade-up inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-leaf-600 hover:bg-leaf-700 text-white font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            style="transition-delay: 0.3s"
          >
            <Sprout :size="18" />
            Talk to Our Team
          </a>
        </div>

        <!-- Right column: feature cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="(feature, i) in features"
            :key="feature.title"
            ref="featureRefs"
            class="animate-fade-up bg-white rounded-2xl p-5 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            :style="`transition-delay: ${i * 0.1 + 0.15}s`"
          >
            <div class="w-11 h-11 rounded-full bg-leaf-100 flex items-center justify-center mb-4">
              <component :is="feature.icon" :size="22" class="text-leaf-600" />
            </div>
            <h3 class="text-base font-bold text-night-900 mb-1">{{ feature.title }}</h3>
            <p class="text-night-500 text-sm leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Wavy bottom divider: solar-50 to white -->
    <div class="overflow-hidden leading-none">
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" class="block w-full">
        <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Leaf, Sprout, ShieldCheck, Clock, Award, Users, Lightbulb, HeartHandshake } from 'lucide-vue-next'

const labelRef = ref(null)
const headRef = ref(null)
const paraRef = ref(null)
const ctaRef = ref(null)
const featureRefs = ref([])

const features = [
  {
    icon: ShieldCheck,
    title: 'Certified & Insured',
    description: 'Every installer on our team is fully certified and insured for your complete peace of mind.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your time. Projects are completed on schedule, every single time.',
  },
  {
    icon: Award,
    title: '5-Year Warranty',
    description: 'Comprehensive warranty covering both panels and workmanship so you\'re protected long-term.',
  },
  {
    icon: HeartHandshake,
    title: 'Local & Trusted',
    description: 'Deeply rooted in the community, we\'ve been serving local homeowners for over 15 years.',
  },
  {
    icon: Lightbulb,
    title: 'Smart Monitoring',
    description: 'Real-time app monitoring lets you track your solar output and savings anytime.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Our friendly support team is always just a call or message away after installation.',
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

  const elements = [labelRef.value, headRef.value, paraRef.value, ctaRef.value, ...featureRefs.value]
  elements.forEach((el) => { if (el) observer.observe(el) })
})
</script>
