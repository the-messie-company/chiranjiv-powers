<template>
  <section id="why-us" class="relative bg-night-900 py-24 lg:py-32 overflow-hidden">

    <!-- Ambient glow -->
    <div
      class="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%);"
    ></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        <!-- Left: Text -->
        <div class="animate-fade-up" ref="leftEl">
          <span class="font-mono text-night-400 text-sm tracking-widest">// why_choose_us</span>
          <h2 class="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
            Built Different.<br />
            <span
              class="text-solar-400"
              style="text-shadow: 0 0 30px rgba(250,204,21,0.4);"
            >Engineered to Last.</span>
          </h2>
          <p class="mt-6 text-night-400 text-lg leading-relaxed max-w-lg">
            We don't just install panels — we architect energy systems. Our engineering-first approach means every watt is optimized, every component certified, and every install backed by a decade of field expertise.
          </p>
          <div class="mt-4 text-night-400 text-base leading-relaxed max-w-lg">
            From satellite-based site analysis to real-time performance dashboards, Chiranjiv Powers brings enterprise-grade tech to every project.
          </div>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full font-semibold text-night-900 bg-solar-400 hover:bg-solar-300 transition-all duration-300"
            :style="{ boxShadow: '0 0 24px rgba(250,204,21,0.35)' }"
          >
            <Zap class="w-4 h-4" />
            Start Your Project
          </a>
        </div>

        <!-- Right: Feature Cards -->
        <div class="relative">
          <!-- Vertical cyan decoration line -->
          <div class="absolute -left-6 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent hidden lg:block"></div>

          <div class="flex flex-col gap-4">
            <div
              v-for="(feature, index) in features"
              :key="feature.title"
              ref="featureEls"
              class="animate-fade-up bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:bg-white/[0.08]"
              :style="{ transitionDelay: `${index * 0.1}s` }"
            >
              <!-- Icon -->
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                :class="index % 2 === 0 ? 'bg-solar-400/10' : 'bg-cyan-400/10'"
              >
                <component
                  :is="feature.icon"
                  class="w-5 h-5"
                  :class="index % 2 === 0 ? 'text-solar-400' : 'text-cyan-400'"
                />
              </div>

              <!-- Text -->
              <div>
                <h3 class="text-white font-bold text-base mb-1">{{ feature.title }}</h3>
                <p class="text-night-400 text-sm leading-relaxed">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Zap, ShieldCheck, BarChart3, Cpu, Users } from 'lucide-vue-next'

const leftEl = ref(null)
const featureEls = ref([])

const features = [
  {
    icon: ShieldCheck,
    title: 'Certified & Compliant',
    description: 'Every installation meets IEC, BIS, and local grid-code standards. Our engineers hold NABCEP and MNRE certifications.',
  },
  {
    icon: Cpu,
    title: 'Smart Technology Stack',
    description: 'IoT-enabled monitoring, ML-driven yield forecasting, and automated fault detection built into every system.',
  },
  {
    icon: BarChart3,
    title: 'Transparent ROI Analytics',
    description: 'Live dashboards show generation, savings, and carbon offset. No black boxes — just clear data.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Teams',
    description: 'A single point of contact from survey to commissioning. We own the timeline and deliver on it.',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.1 }
  )

  if (leftEl.value) observer.observe(leftEl.value)
  featureEls.value.forEach(el => { if (el) observer.observe(el) })
})
</script>
