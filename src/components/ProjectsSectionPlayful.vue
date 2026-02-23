<template>
  <section id="projects" class="py-20 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="text-center mb-10 animate-fade-up" ref="headerRef">
        <div class="inline-block px-4 py-1.5 rounded-full bg-night-100 text-night-700 font-bold text-sm mb-4 border-2 border-night-200">
          🏗️ Our Work
        </div>
        <h2 class="text-4xl sm:text-5xl font-black text-night-900">
          Projects We're
          <span class="relative inline-block">
            <span class="relative z-10">Proud Of</span>
            <span class="absolute bottom-1 left-0 w-full h-3 bg-solar-400 -z-0 rounded opacity-60"></span>
          </span>
        </h2>
        <p class="mt-4 text-night-600 text-lg max-w-xl mx-auto">
          Every installation is a story of savings, sustainability, and happy customers.
        </p>
      </div>

      <!-- Filter tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-10 animate-fade-up" ref="tabsRef">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          class="px-5 py-2.5 rounded-full font-bold text-sm transition-all"
          :class="activeTab === tab
            ? 'bg-solar-400 text-night-900'
            : 'bg-night-100 text-night-600 hover:bg-solar-100 hover:text-night-800'"
          :style="activeTab === tab ? 'box-shadow: 2px 2px 0px #A16207;' : ''"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Projects grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.name"
          class="rounded-3xl overflow-hidden bg-white border border-night-100 group cursor-pointer animate-fade-up hover:-translate-y-1 transition-transform"
          :style="{ boxShadow: '3px 3px 0px #FACC15', transitionDelay: `${index * 0.1}s` }"
          :ref="el => { if (el) cardRefs[index] = el }"
        >
          <!-- Image placeholder: colorful gradient -->
          <div
            class="h-48 relative overflow-hidden flex items-end p-4"
            :style="{ background: project.gradient }"
          >
            <!-- Decorative SVG solar illustration inside card -->
            <svg class="absolute top-3 right-3 opacity-30" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="14" fill="white"/>
              <line x1="30" y1="6" x2="30" y2="14" stroke="white" stroke-width="3" stroke-linecap="round"/>
              <line x1="30" y1="46" x2="30" y2="54" stroke="white" stroke-width="3" stroke-linecap="round"/>
              <line x1="6" y1="30" x2="14" y2="30" stroke="white" stroke-width="3" stroke-linecap="round"/>
              <line x1="46" y1="30" x2="54" y2="30" stroke="white" stroke-width="3" stroke-linecap="round"/>
              <line x1="13" y1="13" x2="19" y2="19" stroke="white" stroke-width="3" stroke-linecap="round"/>
              <line x1="41" y1="41" x2="47" y2="47" stroke="white" stroke-width="3" stroke-linecap="round"/>
              <line x1="47" y1="13" x2="41" y2="19" stroke="white" stroke-width="3" stroke-linecap="round"/>
              <line x1="19" y1="41" x2="13" y2="47" stroke="white" stroke-width="3" stroke-linecap="round"/>
            </svg>

            <!-- Capacity badge -->
            <span class="relative z-10 px-3 py-1.5 rounded-full bg-solar-400 text-night-900 font-bold text-sm border-2 border-solar-500">
              ⚡ {{ project.capacity }}
            </span>
          </div>

          <!-- Card body -->
          <div class="p-5">
            <div class="flex items-start justify-between gap-2 mb-2">
              <h3 class="font-black text-night-900 text-lg leading-tight">{{ project.name }}</h3>
              <span class="px-2.5 py-1 rounded-full text-xs font-bold shrink-0" :class="project.typeBadge">
                {{ project.type }}
              </span>
            </div>
            <p class="text-night-500 text-sm mb-3">
              📍 {{ project.location }}
            </p>
            <p class="text-night-600 text-sm leading-relaxed">{{ project.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const headerRef = ref(null)
const tabsRef = ref(null)
const cardRefs = ref([])

const tabs = ['All', 'Residential', 'Commercial']
const activeTab = ref('All')

const projects = [
  {
    name: 'Patel Family Residence',
    location: 'Navrangpura, Ahmedabad',
    capacity: '5 kW',
    type: 'Residential',
    typeBadge: 'bg-solar-100 text-solar-700',
    description: 'Rooftop installation on a 3BHK home. Reduced monthly electricity bills by 85% and qualified for net metering.',
    gradient: 'linear-gradient(135deg, #FDE68A 0%, #FACC15 50%, #F59E0B 100%)',
    category: 'Residential',
  },
  {
    name: 'Mehta Bakery & Café',
    location: 'Satellite, Ahmedabad',
    capacity: '12 kW',
    type: 'Commercial',
    typeBadge: 'bg-leaf-100 text-leaf-700',
    description: 'Ground-mounted system supplying continuous power to ovens and refrigeration, cutting energy costs by 60%.',
    gradient: 'linear-gradient(135deg, #86EFAC 0%, #4ADE80 50%, #22C55E 100%)',
    category: 'Commercial',
  },
  {
    name: 'Singh Farmhouse',
    location: 'Gandhinagar Rural',
    capacity: '8 kW',
    type: 'Residential',
    typeBadge: 'bg-solar-100 text-solar-700',
    description: 'Off-grid system with battery backup for a rural farmhouse, providing 24/7 clean energy independence.',
    gradient: 'linear-gradient(135deg, #FED7AA 0%, #FB923C 50%, #F97316 100%)',
    category: 'Residential',
  },
]

const filteredProjects = computed(() => {
  if (activeTab.value === 'All') return projects
  return projects.filter(p => p.category === activeTab.value)
})

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
  if (tabsRef.value) observer.observe(tabsRef.value)
  cardRefs.value.forEach((el) => { if (el) observer.observe(el) })
})
</script>
