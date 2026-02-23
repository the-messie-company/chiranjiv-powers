<template>
  <section class="py-20 lg:py-28 bg-leaf-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div ref="headerRef" class="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
        <span class="inline-block px-4 py-1.5 rounded-full bg-leaf-100 text-leaf-700 text-sm font-semibold mb-4">
          Testimonials
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-night-900 mb-4">
          What Our Clients Say
        </h2>
        <p class="text-night-500 text-lg leading-relaxed">
          Real feedback from homeowners and business owners who've made the switch to solar with us.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(t, i) in testimonials"
          :key="t.name"
          :ref="el => cardRefs[i] = el"
          class="bg-white rounded-2xl p-7 border-l-4 border-leaf-500 shadow-sm hover:shadow-md transition-shadow animate-fade-up"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <Star
              v-for="n in 5"
              :key="n"
              :size="16"
              class="fill-solar-400 text-solar-400"
            />
          </div>
          <!-- Quote -->
          <p class="text-night-600 leading-relaxed mb-6 italic">"{{ t.quote }}"</p>
          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              :class="t.avatarBg">
              {{ initials(t.name) }}
            </div>
            <div>
              <div class="font-bold text-night-900 text-sm">{{ t.name }}</div>
              <div class="text-xs text-night-500">{{ t.location }}</div>
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

const headerRef = ref(null)
const cardRefs = ref([])

const testimonials = [
  {
    name: 'Rajesh Sharma',
    location: 'Residential Client, Delhi',
    quote: "Chiranjiv Powers installed a 5kW system on our rooftop last year. Our electricity bill dropped by over 80%. The team was professional, clean, and finished on time. Highly recommend!",
    avatarBg: 'bg-solar-500',
  },
  {
    name: 'Priya Nair',
    location: 'Commercial Client, Bangalore',
    quote: "We had a 50kW system installed at our factory. The ROI has been incredible — we'll recover the cost in under 3 years. The after-sales team is responsive and thorough.",
    avatarBg: 'bg-leaf-600',
  },
  {
    name: 'Anil Mehta',
    location: 'Residential Client, Pune',
    quote: "From the first consultation to final handover, everything was seamless. The monitoring system lets me track generation in real-time. Very satisfied with Chiranjiv Powers.",
    avatarBg: 'bg-night-700',
  },
]

function initials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.15 })

  if (headerRef.value) observer.observe(headerRef.value)
  cardRefs.value.forEach(el => { if (el) observer.observe(el) })
})
</script>
