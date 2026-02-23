<template>
  <section class="py-20 bg-leaf-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="text-center mb-12 animate-fade-up" ref="headerRef">
        <div class="inline-block px-4 py-1.5 rounded-full bg-leaf-100 text-leaf-700 font-bold text-sm mb-4 border-2 border-leaf-200">
          💬 Happy Customers
        </div>
        <h2 class="text-4xl sm:text-5xl font-black text-night-900">
          Real Stories,
          <span class="relative inline-block">
            <span class="relative z-10">Real Savings</span>
            <span class="absolute bottom-1 left-0 w-full h-3 bg-solar-400 -z-0 rounded opacity-60"></span>
          </span>
        </h2>
        <p class="mt-4 text-night-600 text-lg max-w-xl mx-auto">
          Don't just take our word for it — here's what our neighbours are saying.
        </p>
      </div>

      <!-- Testimonial cards -->
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          class="rounded-3xl bg-white p-7 flex flex-col gap-4 relative animate-fade-up"
          :style="{ boxShadow: '4px 4px 0px #4ADE80', transitionDelay: `${index * 0.1}s` }"
          :ref="el => { if (el) cardRefs[index] = el }"
        >
          <!-- Large quotation mark decoration -->
          <div class="absolute top-5 right-6 opacity-80">
            <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 28V16.8C0 11.2 2.1 6.53333 6.3 2.8C10.5 0.933333 14 0 16.8 0L18.2 3.5C15.4 4.43333 13.0667 6.06667 11.2 8.4C9.33333 10.7333 8.4 13.3 8.4 16.1H14V28H0ZM18 28V16.8C18 11.2 20.1 6.53333 24.3 2.8C28.5 0.933333 32 0 34.8 0L36 3.5C33.2 4.43333 30.8667 6.06667 29 8.4C27.1333 10.7333 26.2 13.3 26.2 16.1H32V28H18Z" fill="#FEF08A"/>
            </svg>
          </div>

          <!-- Stars -->
          <div class="flex gap-1">
            <span v-for="i in 5" :key="i" class="text-solar-400 text-lg">★</span>
          </div>

          <!-- Quote -->
          <blockquote class="text-night-700 text-base leading-relaxed flex-1">
            "{{ testimonial.quote }}"
          </blockquote>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-2 border-t border-night-100">
            <div
              class="w-11 h-11 rounded-full flex items-center justify-center text-xl font-black text-night-900"
              :class="testimonial.avatarBg"
            >
              {{ testimonial.initials }}
            </div>
            <div>
              <div class="font-bold text-night-900 text-sm">{{ testimonial.name }}</div>
              <div class="text-night-500 text-xs">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)
const cardRefs = ref([])

const testimonials = [
  {
    quote: "Chiranjiv Powers made the whole process so easy! From site visit to switch-on was less than 3 weeks. Our electricity bill dropped by 80% the very first month. Absolutely worth it!",
    name: 'Ramesh Patel',
    role: 'Homeowner, Ahmedabad',
    initials: 'RP',
    avatarBg: 'bg-solar-200',
  },
  {
    quote: "We run a small bakery and were worried about high power costs. The team was patient, transparent about every cost, and the system has been running perfectly for 2 years now. Highly recommend!",
    name: 'Sunita Mehta',
    role: 'Small Business Owner',
    initials: 'SM',
    avatarBg: 'bg-leaf-200',
  },
  {
    quote: "The crew was professional and cleaned up after themselves. They explained everything about how the system works and I feel confident I made a great decision. My neighbours are now asking for their number!",
    name: 'Vikram Singh',
    role: 'Residential Customer',
    initials: 'VS',
    avatarBg: 'bg-orange-200',
  },
]

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
  cardRefs.value.forEach((el) => { if (el) observer.observe(el) })
})
</script>
