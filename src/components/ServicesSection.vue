<template>
  <section id="services" class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div ref="headerRef" class="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
        <span class="inline-block px-4 py-1.5 rounded-full bg-solar-100 text-solar-700 text-sm font-semibold mb-4">
          Our Services
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-night-900 mb-4">
          What We Offer
        </h2>
        <p class="text-night-500 text-lg leading-relaxed">
          Comprehensive solar energy solutions tailored to your needs — from initial installation to long-term support.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          :ref="el => cardRefs[i] = el"
          class="group rounded-2xl overflow-hidden bg-night-50 hover:bg-white border border-night-100 hover:border-solar-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <!-- Icon strip -->
          <div class="h-2 bg-solar-400"></div>
          <div class="p-6">
            <div class="w-12 h-12 rounded-xl bg-solar-100 flex items-center justify-center mb-5 group-hover:bg-solar-500 transition-colors duration-300">
              <component :is="service.icon" :size="22" class="text-solar-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 class="text-lg font-bold text-night-900 mb-2">{{ service.title }}</h3>
            <p class="text-night-500 text-sm leading-relaxed">{{ service.description }}</p>
            <div class="mt-5 pt-4 border-t border-night-200">
              <ul class="space-y-1.5">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="flex items-center gap-2 text-sm text-night-600"
                >
                  <CheckCircle :size="14" class="text-leaf-500 flex-shrink-0" />
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Home, Building2, BatteryCharging, Wrench, CheckCircle } from 'lucide-vue-next'

const headerRef = ref(null)
const cardRefs = ref([])

const services = [
  {
    icon: Home,
    title: 'Residential Installation',
    description: 'Custom solar systems designed for your home. Maximize energy production and savings with rooftop panels tailored to your usage.',
    features: ['Rooftop assessment', 'Custom panel layout', 'Grid tie-up support'],
  },
  {
    icon: Building2,
    title: 'Commercial Installation',
    description: 'Large-scale solar solutions for offices, factories, and industrial facilities. Reduce operational costs significantly.',
    features: ['High-capacity systems', 'Industrial wiring', 'ROI analysis'],
  },
  {
    icon: BatteryCharging,
    title: 'Add-ons & Upgrades',
    description: 'Enhance your solar setup with battery storage systems, smart monitoring, and inverter upgrades for round-the-clock energy.',
    features: ['Battery storage', 'Smart monitoring', 'Inverter upgrades'],
  },
  {
    icon: Wrench,
    title: 'After-Sales Service',
    description: 'Dedicated maintenance, repairs, and Annual Maintenance Contracts to keep your solar system running at peak performance.',
    features: ['Scheduled maintenance', 'Emergency repairs', 'AMC packages'],
  },
]

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(observerCallback, { threshold: 0.15 })
  if (headerRef.value) observer.observe(headerRef.value)
  cardRefs.value.forEach(el => { if (el) observer.observe(el) })
})
</script>
