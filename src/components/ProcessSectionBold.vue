<template>
  <section id="process" class="bg-night-900 py-24 overflow-hidden relative">
    <!-- Top solar-400 accent -->
    <div class="h-1 w-full bg-solar-400 absolute top-0 left-0"></div>

    <!-- Background watermark -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <span class="text-white font-black uppercase" style="font-size: 180px; opacity: 0.02; white-space: nowrap;">PROCESS</span>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-20 animate-fade-up" ref="headerEl">
        <span class="text-solar-400 text-xs font-black uppercase tracking-[0.3em] block mb-4">How It Works</span>
        <h2 class="text-5xl lg:text-6xl font-black text-white uppercase">
          Our Installation<br />
          <span class="text-solar-400">Process</span>
        </h2>
      </div>

      <!-- Steps: desktop horizontal, mobile vertical -->
      <div class="relative">

        <!-- Dashed connecting line (desktop only) -->
        <div class="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px border-t-2 border-dashed border-solar-400 opacity-40 z-0" style="top: 2.5rem;"></div>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
          <div
            v-for="(step, index) in steps"
            :key="step.number"
            class="animate-fade-up text-center lg:text-left group"
            :ref="(el) => { if (el) stepEls[index] = el }"
          >
            <!-- Number bubble -->
            <div class="flex lg:block justify-center mb-6">
              <div class="relative inline-block">
                <span class="text-6xl font-black text-solar-400 leading-none select-none">
                  {{ step.number }}
                </span>
                <!-- Small circle behind number -->
                <div class="absolute -inset-2 border border-solar-400 opacity-20 group-hover:opacity-50 transition-opacity"></div>
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-white font-black text-sm uppercase tracking-[0.15em] mb-3 leading-tight">
              {{ step.title }}
            </h3>

            <!-- Description -->
            <p class="text-night-400 text-sm leading-relaxed">
              {{ step.description }}
            </p>

            <!-- Mobile connector -->
            <div class="lg:hidden flex justify-center mt-6">
              <div v-if="index < steps.length - 1" class="w-px h-8 border-l-2 border-dashed border-solar-400 opacity-40"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-20 animate-fade-up" ref="ctaEl">
        <a
          href="#contact"
          class="inline-block bg-solar-400 text-night-900 font-black text-sm uppercase tracking-[0.15em] px-10 py-4 hover:bg-solar-300 transition-colors"
        >
          Start Your Solar Journey &rarr;
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerEl = ref(null)
const stepEls = ref([])
const ctaEl = ref(null)

const steps = [
  {
    number: '01',
    title: 'Site Survey',
    description: 'Our engineers conduct a detailed on-site assessment of your roof, electrical load, and sunlight exposure.',
  },
  {
    number: '02',
    title: 'System Design',
    description: 'We design a custom solar system optimized for your energy needs and available roof space.',
  },
  {
    number: '03',
    title: 'Approval & Permits',
    description: 'We handle all DISCOM applications, net metering registrations, and government subsidy paperwork.',
  },
  {
    number: '04',
    title: 'Installation',
    description: 'Our certified team installs the complete system — panels, inverter, mounting, and wiring — in 1–3 days.',
  },
  {
    number: '05',
    title: 'Handover & AMC',
    description: 'System commissioning, monitoring setup, and full handover with a comprehensive maintenance plan.',
  },
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
    { threshold: 0.15 }
  )

  if (headerEl.value) observer.observe(headerEl.value)
  if (ctaEl.value) observer.observe(ctaEl.value)
  stepEls.value.forEach((el, i) => {
    if (el) {
      el.style.transitionDelay = `${i * 0.12}s`
      observer.observe(el)
    }
  })
})
</script>
