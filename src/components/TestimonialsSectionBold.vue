<template>
  <section class="bg-white py-24 overflow-hidden relative">
    <!-- Background watermark -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <span class="text-night-900 font-black uppercase leading-none" style="font-size: 180px; opacity: 0.03; white-space: nowrap;">CLIENTS</span>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-16 animate-fade-up" ref="headerEl">
        <span class="text-solar-400 text-xs font-black uppercase tracking-[0.3em] block mb-4">Testimonials</span>
        <h2 class="text-5xl lg:text-6xl font-black text-night-900 uppercase leading-tight">
          What Our<br />
          <span class="relative inline-block">
            Clients Say
            <span class="absolute bottom-1 left-0 w-full h-1 bg-solar-400"></span>
          </span>
        </h2>
      </div>

      <!-- Testimonial cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-night-200">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          class="animate-fade-up bg-night-900 p-8 border-l-4 border-solar-400 group hover:bg-night-800 transition-colors duration-300"
          :ref="(el) => { if (el) cardEls[index] = el }"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-6">
            <span
              v-for="i in 5"
              :key="i"
              class="text-solar-400 text-lg"
            >&#9733;</span>
          </div>

          <!-- Quote -->
          <p class="text-night-300 text-base leading-relaxed mb-8 italic">
            "{{ testimonial.quote }}"
          </p>

          <!-- Divider -->
          <div class="w-12 h-0.5 bg-solar-400 mb-6"></div>

          <!-- Author -->
          <div>
            <div class="text-solar-400 font-black text-sm uppercase tracking-[0.15em]">
              {{ testimonial.name }}
            </div>
            <div class="text-night-500 text-xs uppercase tracking-[0.1em] mt-1">
              {{ testimonial.role }}
            </div>
            <div class="text-night-600 text-xs mt-1">
              {{ testimonial.location }}
            </div>
          </div>
        </div>
      </div>

      <!-- Trust badges row -->
      <div class="mt-16 border border-night-200 grid grid-cols-2 lg:grid-cols-4 gap-px bg-night-200 animate-fade-up" ref="badgesEl">
        <div
          v-for="badge in badges"
          :key="badge.text"
          class="bg-white p-6 text-center"
        >
          <div class="text-solar-400 font-black text-2xl mb-1">{{ badge.value }}</div>
          <div class="text-night-600 text-xs uppercase tracking-[0.15em] font-bold">{{ badge.text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerEl = ref(null)
const cardEls = ref([])
const badgesEl = ref(null)

const testimonials = [
  {
    quote: 'Chiranjiv Powers installed a 5 kW system on our bungalow in Pune. The team was professional, punctual, and the installation was completed in just 2 days. Our electricity bill dropped by 90%.',
    name: 'Rajesh Kulkarni',
    role: 'Homeowner',
    location: 'Kothrud, Pune',
  },
  {
    quote: 'We chose them for our 50 kW commercial installation. The entire process from survey to commissioning was seamless. The subsidy paperwork was handled entirely by their team — zero hassle.',
    name: 'Priya Mehta',
    role: 'Business Owner',
    location: 'Nashik, Maharashtra',
  },
  {
    quote: 'Outstanding work on our 200 kW industrial rooftop project. The ROI has been incredible — we recovered our investment in under 4 years. Highly recommend for large industrial projects.',
    name: 'Suresh Patil',
    role: 'Factory Director',
    location: 'Aurangabad, Maharashtra',
  },
]

const badges = [
  { value: '5★', text: 'Google Rating' },
  { value: '50+', text: 'Happy Clients' },
  { value: '0', text: 'Failed Installations' },
  { value: '24/7', text: 'Support Available' },
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
    { threshold: 0.1 }
  )

  if (headerEl.value) observer.observe(headerEl.value)
  if (badgesEl.value) observer.observe(badgesEl.value)
  cardEls.value.forEach((el, i) => {
    if (el) {
      el.style.transitionDelay = `${i * 0.12}s`
      observer.observe(el)
    }
  })
})
</script>
