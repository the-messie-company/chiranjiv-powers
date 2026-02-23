<template>
  <section id="contact" class="relative bg-night-900 py-24 lg:py-32 overflow-hidden">

    <!-- Background glow -->
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
      style="background: radial-gradient(ellipse at bottom, rgba(250,204,21,0.04) 0%, transparent 70%);"
    ></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-16 animate-fade-up" ref="headerEl">
        <span class="font-mono text-cyan-400 text-sm tracking-widest">// contact.init()</span>
        <h2 class="mt-3 text-4xl sm:text-5xl font-black text-white">
          Ready to Go
          <span class="text-solar-400" style="text-shadow: 0 0 30px rgba(250,204,21,0.4);">Solar?</span>
        </h2>
        <p class="mt-4 text-night-400 text-lg max-w-lg mx-auto">
          Send us your details and we'll have a proposal on your desk within 48 hours.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        <!-- Left: Form -->
        <div class="animate-fade-up" ref="formEl">
          <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="flex flex-col gap-2">
                <label class="font-mono text-xs text-night-400 uppercase tracking-widest">Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Your full name"
                  class="bg-night-800 border border-white/10 focus:border-solar-400/60 rounded-xl px-4 py-3 text-white placeholder-night-600 text-sm outline-none transition-all duration-200 focus:bg-night-800/80"
                  :style="{ boxShadow: 'none' }"
                  @focus="e => e.target.style.boxShadow = '0 0 0 1px rgba(250,204,21,0.2)'"
                  @blur="e => e.target.style.boxShadow = 'none'"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label class="font-mono text-xs text-night-400 uppercase tracking-widest">Phone</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  class="bg-night-800 border border-white/10 focus:border-solar-400/60 rounded-xl px-4 py-3 text-white placeholder-night-600 text-sm outline-none transition-all duration-200"
                  @focus="e => e.target.style.boxShadow = '0 0 0 1px rgba(250,204,21,0.2)'"
                  @blur="e => e.target.style.boxShadow = 'none'"
                />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-mono text-xs text-night-400 uppercase tracking-widest">Email</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                class="bg-night-800 border border-white/10 focus:border-solar-400/60 rounded-xl px-4 py-3 text-white placeholder-night-600 text-sm outline-none transition-all duration-200"
                @focus="e => e.target.style.boxShadow = '0 0 0 1px rgba(250,204,21,0.2)'"
                @blur="e => e.target.style.boxShadow = 'none'"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-mono text-xs text-night-400 uppercase tracking-widest">Project Type</label>
              <select
                v-model="form.type"
                class="bg-night-800 border border-white/10 focus:border-solar-400/60 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-200 appearance-none"
                @focus="e => e.target.style.boxShadow = '0 0 0 1px rgba(250,204,21,0.2)'"
                @blur="e => e.target.style.boxShadow = 'none'"
              >
                <option value="" class="bg-night-800">Select project type</option>
                <option value="residential" class="bg-night-800">Residential</option>
                <option value="commercial" class="bg-night-800">Commercial</option>
                <option value="industrial" class="bg-night-800">Industrial</option>
                <option value="solar-farm" class="bg-night-800">Solar Farm</option>
              </select>
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-mono text-xs text-night-400 uppercase tracking-widest">Message</label>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Tell us about your energy goals, site location, and approximate capacity needed..."
                class="bg-night-800 border border-white/10 focus:border-solar-400/60 rounded-xl px-4 py-3 text-white placeholder-night-600 text-sm outline-none transition-all duration-200 resize-none"
                @focus="e => e.target.style.boxShadow = '0 0 0 1px rgba(250,204,21,0.2)'"
                @blur="e => e.target.style.boxShadow = 'none'"
              ></textarea>
            </div>

            <button
              type="submit"
              class="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-semibold text-night-900 bg-solar-400 hover:bg-solar-300 transition-all duration-300"
              :style="{ boxShadow: '0 0 24px rgba(250,204,21,0.35)' }"
            >
              <Send class="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>

        <!-- Right: Contact Info + Map -->
        <div class="flex flex-col gap-6 animate-fade-up" ref="infoEl" style="transition-delay: 0.15s;">

          <!-- Info Cards -->
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:border-cyan-400/20 transition-all duration-300"
          >
            <div class="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
              <component :is="info.icon" class="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <p class="font-mono text-xs text-night-500 uppercase tracking-wider mb-1">{{ info.label }}</p>
              <p class="text-white text-sm font-medium">{{ info.value }}</p>
              <p v-if="info.sub" class="text-night-400 text-xs mt-0.5">{{ info.sub }}</p>
            </div>
          </div>

          <!-- Map Placeholder -->
          <div class="relative bg-night-800 border border-white/10 rounded-2xl overflow-hidden h-48 flex items-center justify-center">
            <!-- Dotted grid map -->
            <svg class="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="map-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.8" fill="#94A3B8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#map-grid)" />
            </svg>

            <!-- Pin -->
            <div class="relative z-10 flex flex-col items-center gap-2">
              <div
                class="w-10 h-10 rounded-full bg-solar-400/20 border border-solar-400/50 flex items-center justify-center"
                style="box-shadow: 0 0 20px rgba(250,204,21,0.3);"
              >
                <MapPin class="w-5 h-5 text-solar-400" />
              </div>
              <span class="font-mono text-xs text-solar-400">HQ: Pune, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-vue-next'

const headerEl = ref(null)
const formEl = ref(null)
const infoEl = ref(null)

const form = ref({
  name: '',
  phone: '',
  email: '',
  type: '',
  message: '',
})

function handleSubmit() {
  // Form submission handler placeholder
  console.log('Form submitted:', form.value)
}

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '+91 98765 43210', sub: 'Mon–Sat, 9am–7pm IST' },
  { icon: Mail, label: 'Email', value: 'info@chiranjivpowers.com', sub: 'We reply within 24 hours' },
  { icon: MapPin, label: 'Headquarters', value: 'Pune, Maharashtra, India', sub: 'Serving PAN India' },
  { icon: Clock, label: 'Response Time', value: 'Within 48 hours', sub: 'For detailed proposals' },
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

  const els = [headerEl.value, formEl.value, infoEl.value]
  els.forEach(el => { if (el) observer.observe(el) })
})
</script>
