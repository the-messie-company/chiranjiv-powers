<template>
  <section
    id="why-us"
    class="relative bg-white py-32 overflow-hidden"
    style="clip-path: polygon(0 0, 100% 4%, 100% 100%, 0 100%);"
  >
    <!-- Background watermark -->
    <div class="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden">
      <span class="text-night-900 font-black uppercase leading-none pr-4" style="font-size: 160px; opacity: 0.03;">WHY US</span>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- LEFT: Headline + Text -->
        <div class="animate-fade-up" ref="leftEl">
          <span class="text-solar-400 text-xs font-black uppercase tracking-[0.3em] block mb-6">
            Why Choose Us
          </span>

          <h2 class="text-5xl lg:text-6xl font-black text-night-900 uppercase leading-none mb-6">
            Maharashtra's<br />
            Most
            <span class="relative inline-block">
              Trusted
              <span class="absolute -bottom-1 left-0 w-full h-2 bg-solar-400"></span>
            </span>
            <br />Solar Partner
          </h2>

          <p class="text-night-600 text-lg leading-relaxed mb-8 max-w-md">
            Since 2020, Chiranjiv Powers has been delivering reliable, high-performance solar installations across Maharashtra. We combine engineering precision with unmatched after-sales service.
          </p>

          <p class="text-night-500 text-base leading-relaxed max-w-md">
            Our team of certified engineers handles everything from site assessment and design to installation and commissioning — with full government subsidy assistance and net metering support.
          </p>

          <div class="mt-10">
            <a
              href="#contact"
              class="inline-block bg-solar-400 text-night-900 font-black text-sm uppercase tracking-[0.1em] px-8 py-4 hover:bg-solar-300 transition-colors"
            >
              Start Your Project &rarr;
            </a>
          </div>
        </div>

        <!-- RIGHT: 2x2 Feature Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-px bg-night-200 animate-fade-up" ref="rightEl">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            class="bg-white p-8 group hover:bg-night-900 transition-colors duration-300"
            :ref="(el) => { if (el) featureEls[index] = el }"
          >
            <div class="text-solar-400 mb-4 group-hover:text-solar-400 transition-colors">
              <component :is="feature.icon" :size="28" :stroke-width="1.5" />
            </div>
            <h3 class="text-night-900 group-hover:text-white font-black text-xs uppercase tracking-[0.15em] mb-3 transition-colors">
              {{ feature.title }}
            </h3>
            <p class="text-night-500 group-hover:text-night-400 text-sm leading-relaxed transition-colors">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ShieldCheck, Zap, Wrench, BadgeIndianRupee } from 'lucide-vue-next'

const leftEl = ref(null)
const rightEl = ref(null)
const featureEls = ref([])

const features = [
  {
    icon: ShieldCheck,
    title: 'Certified Installers',
    description: 'MNRE-empanelled installers with full compliance to CEIG and DISCOM regulations. All work guaranteed.',
  },
  {
    icon: Zap,
    title: 'Premium Equipment',
    description: 'Tier-1 solar panels and inverters from brands like Adani, Waaree, Solis, and Growatt.',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Subsidy Assistance',
    description: 'We handle all PM Surya Ghar Muft Bijli Yojana paperwork — maximizing your government incentives.',
  },
  {
    icon: Wrench,
    title: '5-Year AMC',
    description: 'Comprehensive annual maintenance contracts with remote monitoring, cleaning, and on-site support.',
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

  const els = [leftEl.value, rightEl.value]
  els.forEach((el, i) => {
    if (el) {
      el.style.transitionDelay = `${i * 0.15}s`
      observer.observe(el)
    }
  })
})
</script>
