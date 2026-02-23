<template>
  <section class="bg-leaf-50 relative py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-14">
        <div ref="labelRef" class="animate-fade-up flex items-center justify-center gap-2 mb-4">
          <Leaf :size="16" class="text-leaf-600" />
          <span class="text-sm font-semibold text-leaf-600 uppercase tracking-widest">Happy Customers</span>
        </div>
        <h2
          ref="headRef"
          class="animate-fade-up text-4xl sm:text-5xl font-black text-night-900 mb-4 leading-tight"
          style="transition-delay: 0.1s"
        >
          Stories from Our Solar Family
        </h2>
        <p
          ref="subRef"
          class="animate-fade-up text-night-500 text-lg max-w-xl mx-auto"
          style="transition-delay: 0.15s"
        >
          Real people, real savings, real impact on the planet.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, i) in testimonials"
          :key="testimonial.author"
          ref="cardRefs"
          class="animate-fade-up bg-white rounded-3xl shadow-md border-t-4 border-leaf-400 p-7 flex flex-col hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          :style="`transition-delay: ${i * 0.12 + 0.2}s`"
        >
          <!-- Stars -->
          <div class="flex items-center gap-1 mb-4">
            <Star
              v-for="n in 5"
              :key="n"
              :size="16"
              class="text-solar-500 fill-solar-500"
            />
          </div>

          <!-- Quote -->
          <p class="text-night-600 leading-relaxed mb-6 flex-1 italic">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-4 border-t border-night-100">
            <div class="w-10 h-10 rounded-full bg-leaf-100 flex items-center justify-center text-leaf-700 font-black text-sm flex-shrink-0">
              {{ testimonial.initials }}
            </div>
            <div>
              <div class="font-bold text-night-900 text-sm">{{ testimonial.author }}</div>
              <div class="text-night-400 text-xs">{{ testimonial.location }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Leaf, Star } from 'lucide-vue-next'

const labelRef = ref(null)
const headRef = ref(null)
const subRef = ref(null)
const cardRefs = ref([])

const testimonials = [
  {
    quote:
      'Chiranjiv Powers made the whole process so easy. From the first call to flipping the switch, everything was smooth and professional. Our electricity bill dropped by 80%!',
    author: 'Priya Sharma',
    initials: 'PS',
    location: 'Jaipur, Rajasthan',
  },
  {
    quote:
      'I was nervous about going solar but their team explained everything patiently and honestly. Installation was done in a single day. Absolutely love it — and the savings are real.',
    author: 'Arjun Mehta',
    initials: 'AM',
    location: 'Ahmedabad, Gujarat',
  },
  {
    quote:
      'The monitoring app is brilliant — I can see exactly how much clean energy my panels produce every day. It feels great knowing we\'re helping the planet too.',
    author: 'Kavita Reddy',
    initials: 'KR',
    location: 'Hyderabad, Telangana',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.15 }
  )

  const elements = [labelRef.value, headRef.value, subRef.value, ...cardRefs.value]
  elements.forEach((el) => { if (el) observer.observe(el) })
})
</script>
