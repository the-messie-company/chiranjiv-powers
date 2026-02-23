<template>
  <section id="projects" class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div ref="headerRef" class="text-center max-w-2xl mx-auto mb-10 animate-fade-up">
        <span class="inline-block px-4 py-1.5 rounded-full bg-night-100 text-night-600 text-sm font-semibold mb-4">
          Our Work
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-night-900 mb-4">
          Featured Projects
        </h2>
        <p class="text-night-500 text-lg leading-relaxed">
          A glimpse of the solar installations we've delivered across residential and commercial sites.
        </p>
      </div>

      <!-- Tabs -->
      <div class="flex justify-center mb-10">
        <div class="inline-flex rounded-full bg-night-100 p-1 gap-1">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="activeTab = tab.value"
            class="px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
            :class="activeTab === tab.value
              ? 'bg-solar-500 text-night-900 shadow-sm'
              : 'text-night-600 hover:text-night-900'"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TransitionGroup
          enter-active-class="transition-all duration-400 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
        >
          <div
            v-for="(project, i) in filteredProjects"
            :key="project.id"
            :ref="el => projectRefs[i] = el"
            class="group rounded-2xl overflow-hidden border border-night-100 hover:border-solar-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <!-- Image placeholder with gradient -->
            <div class="h-52 relative overflow-hidden" :class="project.gradient">
              <div class="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-solar-500 text-night-900 text-xs font-bold">
                  <Zap :size="12" />
                  {{ project.capacity }}
                </span>
              </div>
              <!-- Solar panel SVG decoration -->
              <div class="absolute inset-0 flex items-center justify-center opacity-20">
                <Sun :size="80" class="text-white" />
              </div>
            </div>
            <!-- Card info -->
            <div class="p-5 bg-white">
              <h3 class="font-bold text-night-900 mb-1">{{ project.name }}</h3>
              <div class="flex items-center gap-1.5 text-night-500 text-sm">
                <MapPin :size="13" />
                {{ project.location }}
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Sun, Zap, MapPin } from 'lucide-vue-next'

const headerRef = ref(null)
const projectRefs = ref([])
const activeTab = ref('residential')

const tabs = [
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
]

const allProjects = [
  // Residential
  { id: 1, type: 'residential', name: 'Sharma Residence', location: 'South Delhi', capacity: '5 kW', gradient: 'bg-gradient-to-br from-solar-400 to-solar-600' },
  { id: 2, type: 'residential', name: 'Patel Family Home', location: 'Ahmedabad', capacity: '3.5 kW', gradient: 'bg-gradient-to-br from-leaf-400 to-leaf-600' },
  { id: 3, type: 'residential', name: 'Gupta Villa', location: 'Jaipur', capacity: '8 kW', gradient: 'bg-gradient-to-br from-solar-300 to-leaf-400' },
  // Commercial
  { id: 4, type: 'commercial', name: 'Sunrise Textiles Factory', location: 'Surat', capacity: '50 kW', gradient: 'bg-gradient-to-br from-night-600 to-night-800' },
  { id: 5, type: 'commercial', name: 'Metro Office Complex', location: 'Bangalore', capacity: '100 kW', gradient: 'bg-gradient-to-br from-night-700 to-leaf-700' },
  { id: 6, type: 'commercial', name: 'Green Warehouse', location: 'Pune', capacity: '75 kW', gradient: 'bg-gradient-to-br from-night-500 to-solar-700' },
]

const filteredProjects = computed(() => allProjects.filter(p => p.type === activeTab.value))

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.1 })

  if (headerRef.value) observer.observe(headerRef.value)
  projectRefs.value.forEach(el => { if (el) observer.observe(el) })
})
</script>
