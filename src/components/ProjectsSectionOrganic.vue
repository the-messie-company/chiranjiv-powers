<template>
  <section id="projects" class="bg-white py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <div ref="labelRef" class="animate-fade-up flex items-center justify-center gap-2 mb-4">
          <Leaf :size="16" class="text-leaf-600" />
          <span class="text-sm font-semibold text-leaf-600 uppercase tracking-widest">Our Work</span>
        </div>
        <h2
          ref="headRef"
          class="animate-fade-up text-4xl sm:text-5xl font-black text-night-900 mb-4 leading-tight"
          style="transition-delay: 0.1s"
        >
          Projects We're Proud Of
        </h2>
        <p
          ref="subRef"
          class="animate-fade-up text-night-500 text-lg max-w-xl mx-auto"
          style="transition-delay: 0.15s"
        >
          From cozy homes to large commercial rooftops, here's a glimpse of the clean energy we've helped create.
        </p>
      </div>

      <!-- Tab Pills -->
      <div ref="tabsRef" class="animate-fade-up flex items-center justify-center gap-3 flex-wrap mb-12" style="transition-delay: 0.2s">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          class="px-5 py-2 rounded-full text-sm font-semibold transition-all"
          :class="
            activeTab === tab
              ? 'bg-leaf-600 text-white shadow-md'
              : 'bg-leaf-50 text-leaf-700 hover:bg-leaf-100'
          "
        >
          {{ tab }}
        </button>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        <div
          v-for="(project, i) in filteredProjects"
          :key="project.title"
          ref="cardRefs"
          class="animate-fade-up rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
          :style="`transition-delay: ${i * 0.1 + 0.25}s`"
        >
          <!-- Image placeholder: gradient in leaf/solar tones -->
          <div
            class="h-52 flex items-center justify-center relative overflow-hidden"
            :class="project.gradient"
          >
            <div class="absolute inset-0 opacity-20">
              <svg viewBox="0 0 400 208" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="60" width="320" height="120" rx="8" fill="white" opacity="0.4"/>
                <rect x="60" y="40" width="60" height="20" rx="4" fill="white" opacity="0.5"/>
                <rect x="140" y="40" width="60" height="20" rx="4" fill="white" opacity="0.5"/>
                <rect x="220" y="40" width="60" height="20" rx="4" fill="white" opacity="0.5"/>
              </svg>
            </div>
            <div class="relative z-10 text-center">
              <component :is="project.icon" :size="40" class="text-white mx-auto mb-2 opacity-90" />
              <span class="text-white text-xs font-semibold opacity-80 uppercase tracking-widest">{{ project.type }}</span>
            </div>
          </div>

          <!-- Card body -->
          <div class="bg-solar-50 p-5">
            <div class="flex items-start justify-between gap-3 mb-2">
              <h3 class="font-bold text-night-900 text-base leading-snug">{{ project.title }}</h3>
              <span class="px-3 py-1 rounded-full bg-leaf-100 text-leaf-700 text-xs font-semibold flex-shrink-0">
                {{ project.capacity }}
              </span>
            </div>
            <p class="text-night-500 text-sm mb-3 leading-relaxed">{{ project.description }}</p>
            <div class="flex items-center gap-4 text-xs text-night-400">
              <span class="flex items-center gap-1">
                <MapPin :size="12" />
                {{ project.location }}
              </span>
              <span class="flex items-center gap-1">
                <Calendar :size="12" />
                {{ project.year }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wavy bottom divider: white to solar-50 -->
    <div class="overflow-hidden leading-none mt-16">
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" class="block w-full">
        <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" fill="#FEFCE8" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Leaf, Home, Building2, Factory, MapPin, Calendar } from 'lucide-vue-next'

const labelRef = ref(null)
const headRef = ref(null)
const subRef = ref(null)
const tabsRef = ref(null)
const cardRefs = ref([])

const tabs = ['All', 'Residential', 'Commercial', 'Industrial']
const activeTab = ref('All')

const projects = [
  {
    title: 'Sharma Residence',
    type: 'Residential',
    icon: Home,
    gradient: 'bg-gradient-to-br from-leaf-400 to-leaf-600',
    capacity: '6 kW',
    description: 'Full rooftop installation with battery backup for a family of four. Achieved 90% grid independence.',
    location: 'Jaipur',
    year: '2024',
  },
  {
    title: 'Green Mart Superstore',
    type: 'Commercial',
    icon: Building2,
    gradient: 'bg-gradient-to-br from-solar-400 to-leaf-500',
    capacity: '50 kW',
    description: 'Large-scale flat rooftop array cutting commercial electricity costs by ₹2 lakh per month.',
    location: 'Ahmedabad',
    year: '2024',
  },
  {
    title: 'Sunrise Tech Park',
    type: 'Commercial',
    icon: Building2,
    gradient: 'bg-gradient-to-br from-leaf-500 to-leaf-700',
    capacity: '200 kW',
    description: 'Multi-building campus installation with smart metering and real-time monitoring dashboard.',
    location: 'Hyderabad',
    year: '2023',
  },
  {
    title: 'Patel Villa Complex',
    type: 'Residential',
    icon: Home,
    gradient: 'bg-gradient-to-br from-solar-300 to-solar-500',
    capacity: '15 kW',
    description: 'Shared solar system for a 6-unit villa community with individual consumption tracking.',
    location: 'Surat',
    year: '2024',
  },
  {
    title: 'AgriSun Processing Unit',
    type: 'Industrial',
    icon: Factory,
    gradient: 'bg-gradient-to-br from-leaf-600 to-night-700',
    capacity: '500 kW',
    description: 'Industrial ground-mount system powering a food processing plant, eliminating diesel generators.',
    location: 'Pune',
    year: '2023',
  },
  {
    title: 'Mehta Family Home',
    type: 'Residential',
    icon: Home,
    gradient: 'bg-gradient-to-br from-leaf-300 to-leaf-500',
    capacity: '4 kW',
    description: 'Compact rooftop system for a mid-size family home with EV charging integration.',
    location: 'Bangalore',
    year: '2025',
  },
]

const filteredProjects = computed(() => {
  if (activeTab.value === 'All') return projects
  return projects.filter((p) => p.type === activeTab.value)
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.12 }
  )

  const elements = [labelRef.value, headRef.value, subRef.value, tabsRef.value, ...cardRefs.value]
  elements.forEach((el) => { if (el) observer.observe(el) })
})
</script>
