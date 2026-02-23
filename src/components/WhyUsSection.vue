<template>
  <section id="why-us" class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left: Headline + para -->
        <div ref="leftRef" class="animate-fade-up">
          <span class="inline-block px-4 py-1.5 rounded-full bg-leaf-100 text-leaf-700 text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-night-900 mb-6 leading-tight">
            Solar Done Right,
            <br />
            <span class="text-leaf-600">Every Single Time</span>
          </h2>
          <p class="text-night-500 text-lg leading-relaxed mb-8">
            We don't just install panels — we deliver a complete solar experience. From the first consultation
            to years of ongoing support, Chiranjiv Powers is committed to quality, transparency, and your
            long-term energy independence.
          </p>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-leaf-600 hover:bg-leaf-700 text-white font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Start Your Solar Journey
            <ArrowRight :size="16" />
          </a>
        </div>

        <!-- Right: Feature grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="(feature, i) in features"
            :key="feature.title"
            :ref="el => featureRefs[i] = el"
            class="p-5 rounded-2xl bg-night-50 border border-night-100 hover:border-leaf-200 hover:bg-leaf-50 transition-all group animate-fade-up"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <div class="w-11 h-11 rounded-xl bg-leaf-100 flex items-center justify-center mb-4 group-hover:bg-leaf-500 transition-colors">
              <component :is="feature.icon" :size="20" class="text-leaf-600 group-hover:text-white transition-colors" />
            </div>
            <h3 class="font-bold text-night-900 mb-1.5">{{ feature.title }}</h3>
            <p class="text-sm text-night-500 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ShieldCheck, Cpu, Clock, HeadphonesIcon, ArrowRight, Award } from 'lucide-vue-next'

const leftRef = ref(null)
const featureRefs = ref([])

const features = [
  {
    icon: Award,
    title: 'Certified Installers',
    description: 'Our team holds industry certifications and follows best practices for safe, compliant solar installations.',
  },
  {
    icon: Cpu,
    title: 'Quality Equipment',
    description: 'We partner with top-tier panel and inverter manufacturers to ensure maximum efficiency and longevity.',
  },
  {
    icon: Clock,
    title: 'On-time Delivery',
    description: 'We respect your time. Projects are completed on schedule with clear milestones and regular updates.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 After Support',
    description: 'Round-the-clock support for any issues. Our technicians are just a call away whenever you need us.',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.15 })

  if (leftRef.value) observer.observe(leftRef.value)
  featureRefs.value.forEach(el => { if (el) observer.observe(el) })
})
</script>
