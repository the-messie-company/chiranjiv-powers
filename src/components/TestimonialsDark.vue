<template>
  <section class="relative bg-night-900 py-24 lg:py-32 overflow-hidden">

    <!-- Subtle background glow -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
      style="background: radial-gradient(ellipse, rgba(250,204,21,0.03) 0%, transparent 70%);"
    ></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-16 animate-fade-up" ref="headerEl">
        <span class="font-mono text-cyan-400 text-sm tracking-widest">// client_feedback[]</span>
        <h2 class="mt-3 text-4xl sm:text-5xl font-black text-white">
          Trusted by
          <span class="text-solar-400">Pioneers</span>
        </h2>
        <p class="mt-4 text-night-400 text-lg max-w-lg mx-auto">
          From rooftops to rural microgrids — here's what our clients say.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.author"
          ref="cardEls"
          class="animate-fade-up bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-5 border-t-2 hover:border-t-solar-400/60 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.08]"
          :style="{ transitionDelay: `${index * 0.12}s`, borderTopColor: 'rgba(250,204,21,0.3)' }"
        >
          <!-- Stars -->
          <div class="flex items-center gap-1">
            <Star
              v-for="i in 5"
              :key="i"
              class="w-4 h-4 text-solar-400 fill-solar-400"
            />
          </div>

          <!-- Quote -->
          <blockquote class="text-night-300 text-sm leading-relaxed italic flex-1">
            "{{ testimonial.quote }}"
          </blockquote>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-4 border-t border-white/10">
            <div
              class="w-10 h-10 rounded-full bg-solar-400/10 border border-solar-400/20 flex items-center justify-center text-solar-400 font-black text-sm"
            >{{ testimonial.initials }}</div>
            <div>
              <p class="text-white font-semibold text-sm">{{ testimonial.author }}</p>
              <p class="text-night-500 text-xs font-mono">{{ testimonial.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Star } from 'lucide-vue-next'

const headerEl = ref(null)
const cardEls = ref([])

const testimonials = [
  {
    quote: 'Chiranjiv Powers transformed our factory energy costs. The ROI was faster than projected — we broke even in under 4 years. The monitoring dashboard is incredible.',
    author: 'Rajesh Mehta',
    initials: 'RM',
    location: 'Pune, Maharashtra',
  },
  {
    quote: 'I was skeptical about going solar, but their team walked me through every step. Professional, transparent, and the system has been flawless for two years now.',
    author: 'Priya Nair',
    initials: 'PN',
    location: 'Bengaluru, Karnataka',
  },
  {
    quote: 'The 500kW farm installation was completed two weeks ahead of schedule. Grid connection was seamless. These folks genuinely know their engineering.',
    author: 'Vikram Singh',
    initials: 'VS',
    location: 'Jaipur, Rajasthan',
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

  if (headerEl.value) observer.observe(headerEl.value)
  cardEls.value.forEach(el => { if (el) observer.observe(el) })
})
</script>
