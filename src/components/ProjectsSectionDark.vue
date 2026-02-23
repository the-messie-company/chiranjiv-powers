<template>
  <section id="projects" class="relative bg-night-800 py-24 lg:py-32 overflow-hidden">

    <!-- Top glow line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-12 animate-fade-up" ref="headerEl">
        <span class="font-mono text-cyan-400 text-sm tracking-widest">// projects.filter()</span>
        <h2 class="mt-3 text-4xl sm:text-5xl font-black text-white">
          Deployed &
          <span class="text-solar-400">Generating</span>
        </h2>
        <p class="mt-4 text-night-400 text-lg max-w-lg mx-auto">
          A selection of projects across residential, commercial, and utility scale.
        </p>
      </div>

      <!-- Tabs -->
      <div class="flex items-center justify-center gap-3 mb-10 flex-wrap animate-fade-up" ref="tabsEl">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          class="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border"
          :class="activeTab === tab
            ? 'bg-solar-400/20 border-solar-400/50 text-solar-400'
            : 'bg-white/5 border-white/10 text-night-400 hover:border-white/20 hover:text-white'"
          :style="activeTab === tab ? { boxShadow: '0 0 14px rgba(250,204,21,0.15)' } : {}"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          ref="cardEls"
          class="animate-fade-up group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden cursor-default transition-all duration-300 hover:border-solar-400/30"
          :style="{ transitionDelay: `${index * 0.08}s` }"
          @mouseenter="e => e.currentTarget.style.boxShadow = '0 0 30px rgba(250,204,21,0.1), 0 20px 40px rgba(0,0,0,0.3)'"
          @mouseleave="e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }"
        >
          <!-- Image Placeholder -->
          <div class="relative h-44 bg-gradient-to-br from-night-700 to-night-900 flex items-center justify-center overflow-hidden">
            <!-- Grid pattern on image -->
            <svg class="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="proj-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#94A3B8" stroke-width="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#proj-grid)" />
            </svg>

            <!-- Panel icon -->
            <div class="relative z-10 flex flex-col items-center gap-2">
              <Sun class="w-10 h-10 text-solar-400/60 group-hover:text-solar-400 transition-colors duration-300" />
              <!-- Capacity badge -->
              <span
                class="font-mono font-black text-2xl text-solar-400 group-hover:scale-110 transition-transform duration-300"
                style="text-shadow: 0 0 20px rgba(250,204,21,0.6);"
              >{{ project.capacity }}</span>
            </div>

            <!-- Category badge -->
            <span class="absolute top-3 right-3 font-mono text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 rounded-full">
              {{ project.category }}
            </span>
          </div>

          <!-- Card Body -->
          <div class="p-5">
            <h3 class="text-white font-bold text-base mb-1">{{ project.title }}</h3>
            <p class="text-night-400 text-sm mb-4 leading-relaxed">{{ project.description }}</p>

            <div class="flex items-center justify-between">
              <span class="font-mono text-xs text-night-500">{{ project.location }}</span>
              <span class="font-mono text-xs text-solar-400">{{ project.year }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Sun } from 'lucide-vue-next'

const headerEl = ref(null)
const tabsEl = ref(null)
const cardEls = ref([])

const tabs = ['All', 'Residential', 'Commercial', 'Industrial', 'Solar Farm']
const activeTab = ref('All')

const projects = [
  { title: 'Mehta Residence', capacity: '10kW', category: 'Residential', description: 'Grid-tied rooftop system with battery backup and EV charging integration.', location: 'Pune, MH', year: '2024' },
  { title: 'TechPark Bangalore', capacity: '500kW', category: 'Commercial', description: 'Carport + rooftop hybrid system with smart energy management for a 6-acre IT campus.', location: 'Bengaluru, KA', year: '2024' },
  { title: 'Rajasthan Solar Farm', capacity: '5MW', category: 'Solar Farm', description: 'Utility-scale single-axis tracker farm with remote SCADA monitoring.', location: 'Jodhpur, RJ', year: '2023' },
  { title: 'Sharma Textiles', capacity: '250kW', category: 'Industrial', description: 'Rooftop + ground-mount hybrid reducing peak demand charges by 60%.', location: 'Surat, GJ', year: '2023' },
  { title: 'Green Valley Homes', capacity: '50kW', category: 'Residential', description: 'Community solar for 12 villas with shared battery storage and load balancing.', location: 'Hyderabad, TS', year: '2024' },
  { title: 'Nair Cold Storage', capacity: '150kW', category: 'Commercial', description: 'Solar + storage system eliminating diesel generator dependency for cold chain facility.', location: 'Kochi, KL', year: '2022' },
]

const filteredProjects = computed(() => {
  if (activeTab.value === 'All') return projects
  return projects.filter(p => p.category === activeTab.value)
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.1 }
  )

  if (headerEl.value) observer.observe(headerEl.value)
  if (tabsEl.value) observer.observe(tabsEl.value)
  cardEls.value.forEach(el => { if (el) observer.observe(el) })
})
</script>
