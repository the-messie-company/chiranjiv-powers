<template>
  <section id="contact" class="relative py-20 bg-solar-50 overflow-hidden">
    <!-- Star confetti decorations -->
    <div class="absolute inset-0 pointer-events-none">
      <svg class="absolute top-10 right-16 opacity-40" width="22" height="22" viewBox="0 0 28 28" fill="none">
        <polygon points="14,2 16.9,10.2 25.5,10.2 18.8,15.4 21.3,23.8 14,18.8 6.7,23.8 9.2,15.4 2.5,10.2 11.1,10.2" fill="#FDE047"/>
      </svg>
      <svg class="absolute bottom-16 left-12 opacity-40" width="16" height="16" viewBox="0 0 28 28" fill="none">
        <polygon points="14,2 16.9,10.2 25.5,10.2 18.8,15.4 21.3,23.8 14,18.8 6.7,23.8 9.2,15.4 2.5,10.2 11.1,10.2" fill="#FDE047"/>
      </svg>
      <svg class="absolute top-1/2 left-6 opacity-30" width="20" height="20" viewBox="0 0 28 28" fill="none">
        <polygon points="14,2 16.9,10.2 25.5,10.2 18.8,15.4 21.3,23.8 14,18.8 6.7,23.8 9.2,15.4 2.5,10.2 11.1,10.2" fill="#FDE047"/>
      </svg>
      <svg class="absolute top-8 left-1/3 opacity-30" width="12" height="12" viewBox="0 0 28 28" fill="none">
        <polygon points="14,2 16.9,10.2 25.5,10.2 18.8,15.4 21.3,23.8 14,18.8 6.7,23.8 9.2,15.4 2.5,10.2 11.1,10.2" fill="#FDE047"/>
      </svg>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="text-center mb-12 animate-fade-up" ref="headerRef">
        <div class="inline-block px-4 py-1.5 rounded-full bg-solar-200 text-night-700 font-bold text-sm mb-4 border-2 border-solar-300">
          📬 Get In Touch
        </div>
        <h2 class="text-4xl sm:text-5xl font-black text-night-900">
          Ready to
          <span class="relative inline-block">
            <span class="relative z-10">Go Solar?</span>
            <span class="absolute bottom-1 left-0 w-full h-3 bg-solar-400 -z-0 rounded opacity-60"></span>
          </span>
        </h2>
        <p class="mt-4 text-night-600 text-lg max-w-xl mx-auto">
          Drop us a message and we'll get back to you within a few hours. No pressure, no jargon — just honest advice.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">

        <!-- LEFT: Contact Form -->
        <div class="bg-white rounded-3xl p-7 sm:p-8 border border-night-100 animate-fade-up" ref="formRef" style="box-shadow: 4px 4px 0px #FACC15;">
          <h3 class="text-xl font-black text-night-900 mb-6">Send us a Message</h3>
          <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-night-700 mb-1.5">Your Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Ramesh Patel"
                  required
                  class="w-full px-4 py-3 rounded-2xl border-2 border-night-200 bg-night-50 text-night-900 placeholder-night-400 font-medium text-sm focus:outline-none focus:border-solar-400 transition-colors"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-night-700 mb-1.5">Phone Number</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  class="w-full px-4 py-3 rounded-2xl border-2 border-night-200 bg-night-50 text-night-900 placeholder-night-400 font-medium text-sm focus:outline-none focus:border-solar-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-night-700 mb-1.5">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                required
                class="w-full px-4 py-3 rounded-2xl border-2 border-night-200 bg-night-50 text-night-900 placeholder-night-400 font-medium text-sm focus:outline-none focus:border-solar-400 transition-colors"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-night-700 mb-1.5">Type of Property</label>
              <select
                v-model="form.propertyType"
                class="w-full px-4 py-3 rounded-2xl border-2 border-night-200 bg-night-50 text-night-900 font-medium text-sm focus:outline-none focus:border-solar-400 transition-colors"
              >
                <option value="">Select one...</option>
                <option>Home / Residential</option>
                <option>Commercial / Office</option>
                <option>Industrial</option>
                <option>Farmhouse / Agricultural</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-semibold text-night-700 mb-1.5">Your Message</label>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Tell us about your energy needs, current bills, roof type..."
                class="w-full px-4 py-3 rounded-2xl border-2 border-night-200 bg-night-50 text-night-900 placeholder-night-400 font-medium text-sm focus:outline-none focus:border-solar-400 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full py-4 rounded-full bg-night-900 text-solar-400 font-bold text-lg transition-all hover:-translate-y-0.5 mt-1"
              style="box-shadow: 4px 4px 0px #A16207;"
            >
              <span v-if="!submitted">Send it! 🚀</span>
              <span v-else>Sent! We'll be in touch soon ✅</span>
            </button>
          </form>
        </div>

        <!-- RIGHT: Contact info + map -->
        <div class="flex flex-col gap-5 animate-fade-up" ref="infoRef" style="transition-delay: 0.15s;">

          <!-- Contact info cards -->
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="flex items-start gap-4 bg-solar-100 rounded-2xl px-5 py-4 border border-solar-200"
          >
            <span class="text-2xl mt-0.5">{{ info.emoji }}</span>
            <div>
              <div class="text-xs font-bold text-solar-700 uppercase tracking-wide mb-0.5">{{ info.label }}</div>
              <div class="text-night-800 font-semibold text-sm">{{ info.value }}</div>
            </div>
          </div>

          <!-- Map placeholder -->
          <div class="rounded-3xl overflow-hidden border-2 border-sky-200 flex flex-col items-center justify-center" style="background: #E0F2FE; min-height: 200px;">
            <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Pin body -->
              <ellipse cx="40" cy="38" rx="26" ry="26" fill="#FACC15" stroke="#A16207" stroke-width="3"/>
              <circle cx="40" cy="38" r="10" fill="white"/>
              <!-- Pin tail -->
              <path d="M40 62 L28 80 Q40 92 52 80 Z" fill="#FACC15" stroke="#A16207" stroke-width="2" stroke-linejoin="round"/>
            </svg>
            <p class="text-sky-700 font-semibold text-sm mt-2 mb-4">Ahmedabad, Gujarat, India</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)
const formRef = ref(null)
const infoRef = ref(null)

const submitted = ref(false)

const form = ref({
  name: '',
  phone: '',
  email: '',
  propertyType: '',
  message: '',
})

const contactInfo = [
  { emoji: '📞', label: 'Phone', value: '+91 98765 43210' },
  { emoji: '✉️', label: 'Email', value: 'hello@chiranjivpowers.com' },
  { emoji: '📍', label: 'Address', value: 'Satellite Road, Ahmedabad, Gujarat 380015' },
  { emoji: '🕐', label: 'Office Hours', value: 'Mon–Sat, 9:00 AM – 6:00 PM' },
]

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.value = { name: '', phone: '', email: '', propertyType: '', message: '' }
  }, 4000)
}

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
  if (formRef.value) observer.observe(formRef.value)
  if (infoRef.value) observer.observe(infoRef.value)
})
</script>
