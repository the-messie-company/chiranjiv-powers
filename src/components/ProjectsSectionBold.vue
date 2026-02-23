<template>
  <section id="projects" class="bg-night-50 py-24 overflow-hidden relative">
    <!-- Background watermark -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <span class="text-night-900 font-black uppercase leading-none" style="font-size: 160px; opacity: 0.04; white-space: nowrap;">WORK</span>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-12 animate-fade-up" ref="headerEl">
        <span class="text-solar-400 text-xs font-black uppercase tracking-[0.3em] block mb-4">Our Portfolio</span>
        <h2 class="text-5xl lg:text-6xl font-black text-night-900 uppercase leading-tight">
          Featured<br />
          <span class="relative inline-block">
            Projects
            <span class="absolute bottom-1 left-0 w-full h-1 bg-solar-400"></span>
          </span>
        </h2>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap gap-px bg-night-200 inline-flex mb-12 animate-fade-up" ref="tabsEl">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="text-xs font-black uppercase tracking-[0.15em] px-6 py-3 transition-colors duration-200"
          :class="activeTab === tab
            ? 'bg-solar-400 text-night-900'
            : 'bg-night-100 text-night-600 hover:bg-night-200'"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-night-200">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.name"
          class="animate-fade-up bg-white group hover:shadow-xl transition-shadow duration-300"
          :ref="(el) => { if (el) cardEls[index] = el }"
        >
          <!-- Image placeholder -->
          <div class="bg-night-900 h-48 flex items-center justify-center relative overflow-hidden border-t-4 border-solar-400">
            <!-- Circuit/panel visual -->
            <svg viewBox="0 0 320 180" class="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="80" height="60" fill="none" stroke="#FACC15" stroke-width="1" />
              <rect x="110" y="20" width="80" height="60" fill="none" stroke="#FACC15" stroke-width="1" />
              <rect x="200" y="20" width="80" height="60" fill="none" stroke="#FACC15" stroke-width="1" />
              <rect x="20" y="90" width="80" height="60" fill="none" stroke="#FACC15" stroke-width="1" />
              <rect x="110" y="90" width="80" height="60" fill="none" stroke="#FACC15" stroke-width="1" />
              <rect x="200" y="90" width="80" height="60" fill="none" stroke="#FACC15" stroke-width="1" />
              <line x1="60" y1="80" x2="60" y2="90" stroke="#FACC15" stroke-width="1" />
              <line x1="150" y1="80" x2="150" y2="90" stroke="#FACC15" stroke-width="1" />
              <line x1="240" y1="80" x2="240" y2="90" stroke="#FACC15" stroke-width="1" />
            </svg>
            <!-- Capacity badge -->
            <div class="relative z-10 text-center">
              <span class="text-solar-400 font-black text-3xl block leading-none">{{ project.capacity }}</span>
              <span class="text-night-400 text-xs uppercase tracking-[0.2em] font-bold">System Size</span>
            </div>
            <!-- Type badge -->
            <div class="absolute top-3 right-3 bg-solar-400 text-night-900 text-xs font-black uppercase tracking-wider px-2 py-1">
              {{ project.type }}
            </div>
          </div>

          <!-- Card content -->
          <div class="p-6 border-l border-r border-b border-night-200">
            <h3 class="text-night-900 font-black text-sm uppercase tracking-[0.1em] mb-2 group-hover:text-solar-500 transition-colors">
              {{ project.name }}
            </h3>
            <p class="text-night-500 text-xs mb-4">{{ project.location }}</p>
            <div class="flex justify-between items-center">
              <span class="text-night-400 text-xs uppercase tracking-wider">{{ project.year }}</span>
              <span class="text-solar-400 font-black text-xs uppercase tracking-wider group-hover:tracking-widest transition-all">
                View Details &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- View all CTA -->
      <div class="text-center mt-12 animate-fade-up" ref="ctaEl">
        <a
          href="#contact"
          class="inline-block border-2 border-night-900 text-night-900 font-black text-sm uppercase tracking-[0.15em] px-10 py-4 hover:bg-night-900 hover:text-white transition-colors"
        >
          Discuss Your Project &rarr;
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const headerEl = ref(null)
const tabsEl = ref(null)
const cardEls = ref([])
const ctaEl = ref(null)

const tabs = ['All', 'Residential', 'Commercial', 'Industrial']
const activeTab = ref('All')

const projects = [
  { name: 'Kulkarni Residence', capacity: '5 kW', type: 'Residential', location: 'Kothrud, Pune', year: '2024', category: 'Residential' },
  { name: 'Mehta Enterprises HQ', capacity: '50 kW', type: 'Commercial', location: 'Nashik, MH', year: '2024', category: 'Commercial' },
  { name: 'Aurangabad Steel Works', capacity: '200 kW', type: 'Industrial', location: 'Aurangabad, MH', year: '2023', category: 'Industrial' },
  { name: 'Sharma Bungalow', capacity: '8 kW', type: 'Residential', location: 'Baner, Pune', year: '2023', category: 'Residential' },
  { name: 'Sunrise Shopping Complex', capacity: '80 kW', type: 'Commercial', location: 'Kolhapur, MH', year: '2023', category: 'Commercial' },
  { name: 'Patil Agro Industries', capacity: '150 kW', type: 'Industrial', location: 'Solapur, MH', year: '2022', category: 'Industrial' },
]

const filteredProjects = computed(() => {
  if (activeTab.value === 'All') return projects
  return projects.filter((p) => p.category === activeTab.value)
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  const topEls = [headerEl.value, tabsEl.value, ctaEl.value]
  topEls.forEach((el) => { if (el) observer.observe(el) })
  cardEls.value.forEach((el, i) => {
    if (el) {
      el.style.transitionDelay = `${i * 0.08}s`
      observer.observe(el)
    }
  })
})
</script>
