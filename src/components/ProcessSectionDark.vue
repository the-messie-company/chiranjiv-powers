<template>
  <section id="process" class="relative bg-night-800 py-24 lg:py-32 overflow-hidden">

    <!-- Top glow line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar-400/30 to-transparent"></div>

    <!-- Ambient background radial -->
    <div
      class="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none"
      style="background: radial-gradient(ellipse at bottom right, rgba(250,204,21,0.04) 0%, transparent 70%);"
    ></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-16 animate-fade-up" ref="headerEl">
        <span class="font-mono text-cyan-400 text-sm tracking-widest">// process.init()</span>
        <h2 class="mt-3 text-4xl sm:text-5xl font-black text-white">
          From Concept to<br />
          <span class="text-solar-400">Full Power</span>
        </h2>
        <p class="mt-4 text-night-400 text-lg max-w-xl mx-auto">
          Five precision-engineered steps. Zero guesswork. Your system online on schedule.
        </p>
      </div>

      <!-- Desktop: Horizontal Stepper -->
      <div class="hidden lg:block relative animate-fade-up" ref="stepperEl">

        <!-- Connecting line -->
        <div class="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-solar-400/20 via-solar-400 to-solar-400/20"></div>

        <div class="grid grid-cols-5 gap-4">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="flex flex-col items-center text-center gap-4"
          >
            <!-- Step circle -->
            <div
              class="relative z-10 w-20 h-20 rounded-full bg-night-800 border-2 border-solar-400/60 flex items-center justify-center flex-shrink-0 transition-all duration-300"
              :style="{ boxShadow: '0 0 20px rgba(250,204,21,0.25)' }"
            >
              <component :is="step.icon" class="w-7 h-7 text-solar-400" />
              <!-- Step number badge -->
              <span
                class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-solar-400 text-night-900 text-xs font-black flex items-center justify-center"
              >{{ index + 1 }}</span>
            </div>

            <div>
              <h3 class="text-white font-bold text-sm mb-1">{{ step.title }}</h3>
              <p class="text-night-400 text-xs leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile: Vertical Stepper -->
      <div class="lg:hidden flex flex-col gap-0 animate-fade-up" ref="mobileStepperEl">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="flex items-start gap-5 pb-8 last:pb-0 relative"
        >
          <!-- Vertical connecting line -->
          <div
            v-if="index < steps.length - 1"
            class="absolute left-7 top-14 bottom-0 w-px bg-gradient-to-b from-solar-400/60 to-solar-400/10"
          ></div>

          <!-- Circle -->
          <div
            class="relative z-10 w-14 h-14 rounded-full bg-night-800 border-2 border-solar-400/60 flex items-center justify-center flex-shrink-0"
            :style="{ boxShadow: '0 0 16px rgba(250,204,21,0.2)' }"
          >
            <component :is="step.icon" class="w-5 h-5 text-solar-400" />
            <span
              class="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-solar-400 text-night-900 text-xs font-black flex items-center justify-center"
            >{{ index + 1 }}</span>
          </div>

          <div class="pt-1">
            <h3 class="text-white font-bold text-base mb-1">{{ step.title }}</h3>
            <p class="text-night-400 text-sm leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Search, FileText, Wrench, Zap, Activity } from 'lucide-vue-next'

const headerEl = ref(null)
const stepperEl = ref(null)
const mobileStepperEl = ref(null)

const steps = [
  {
    icon: Search,
    title: 'Site Survey',
    description: 'Satellite imaging + on-site analysis. Shadow mapping, load profiling, structural review.',
  },
  {
    icon: FileText,
    title: 'System Design',
    description: 'Custom engineering drawings, equipment selection, and yield simulation reports.',
  },
  {
    icon: Wrench,
    title: 'Installation',
    description: 'Certified technicians, quality hardware, clean cable management. Done right.',
  },
  {
    icon: Zap,
    title: 'Grid Connection',
    description: 'Net-metering paperwork, DISCOM approvals, and safe energization handled end-to-end.',
  },
  {
    icon: Activity,
    title: 'Live Monitoring',
    description: 'IoT gateway installed, cloud dashboard activated. Watch your savings stack up in real time.',
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

  const els = [headerEl.value, stepperEl.value, mobileStepperEl.value]
  els.forEach(el => { if (el) observer.observe(el) })
})
</script>
