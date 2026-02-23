<template>
  <section id="contact" class="bg-solar-50 relative">
    <!-- Wavy top divider: white to solar-50 -->
    <div class="overflow-hidden leading-none">
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" class="block w-full">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#FEFCE8" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Header -->
      <div class="text-center mb-14">
        <div ref="labelRef" class="animate-fade-up flex items-center justify-center gap-2 mb-4">
          <Leaf :size="16" class="text-leaf-600" />
          <span class="text-sm font-semibold text-leaf-600 uppercase tracking-widest">Get In Touch</span>
        </div>
        <h2
          ref="headRef"
          class="animate-fade-up text-4xl sm:text-5xl font-black text-night-900 mb-4 leading-tight"
          style="transition-delay: 0.1s"
        >
          Let's Start Your Solar Story
        </h2>
        <p
          ref="subRef"
          class="animate-fade-up text-night-500 text-lg max-w-xl mx-auto"
          style="transition-delay: 0.15s"
        >
          Drop us a message and one of our friendly advisors will get back to you within 24 hours — no strings attached.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left: Contact Form -->
        <div
          ref="formRef"
          class="animate-fade-up bg-white rounded-3xl shadow-md p-8"
          style="transition-delay: 0.2s"
        >
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-semibold text-night-700 mb-1.5">First Name</label>
                <input
                  v-model="form.firstName"
                  type="text"
                  placeholder="Priya"
                  class="w-full px-4 py-3 rounded-2xl bg-white border border-leaf-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-100 outline-none text-night-800 placeholder-night-300 transition-all"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-night-700 mb-1.5">Last Name</label>
                <input
                  v-model="form.lastName"
                  type="text"
                  placeholder="Sharma"
                  class="w-full px-4 py-3 rounded-2xl bg-white border border-leaf-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-100 outline-none text-night-800 placeholder-night-300 transition-all"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-night-700 mb-1.5">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="priya@example.com"
                class="w-full px-4 py-3 rounded-2xl bg-white border border-leaf-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-100 outline-none text-night-800 placeholder-night-300 transition-all"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-night-700 mb-1.5">Phone Number</label>
              <input
                v-model="form.phone"
                type="tel"
                placeholder="+91 98765 43210"
                class="w-full px-4 py-3 rounded-2xl bg-white border border-leaf-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-100 outline-none text-night-800 placeholder-night-300 transition-all"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-night-700 mb-1.5">I'm interested in</label>
              <select
                v-model="form.interest"
                class="w-full px-4 py-3 rounded-2xl bg-white border border-leaf-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-100 outline-none text-night-800 transition-all appearance-none"
              >
                <option value="">Select a service...</option>
                <option>Residential Solar</option>
                <option>Commercial Solar</option>
                <option>Battery Storage</option>
                <option>Maintenance & Repair</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-semibold text-night-700 mb-1.5">Message</label>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Tell us a bit about your home and energy goals..."
                class="w-full px-4 py-3 rounded-2xl bg-white border border-leaf-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-100 outline-none text-night-800 placeholder-night-300 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full py-4 rounded-full bg-leaf-600 hover:bg-leaf-700 text-white font-semibold text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Send :size="18" />
              Send My Message
            </button>

            <p v-if="submitted" class="text-center text-leaf-600 font-medium text-sm">
              Thanks! We'll be in touch within 24 hours.
            </p>
          </form>
        </div>

        <!-- Right: Contact Info + Map -->
        <div ref="infoRef" class="animate-fade-up flex flex-col gap-5" style="transition-delay: 0.3s">
          <!-- Contact info cards -->
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="bg-white rounded-2xl shadow-sm p-5 flex items-start gap-4 hover:shadow-md transition-shadow"
          >
            <div class="w-11 h-11 rounded-full bg-leaf-100 flex items-center justify-center flex-shrink-0">
              <component :is="info.icon" :size="20" class="text-leaf-600" />
            </div>
            <div>
              <div class="text-xs font-semibold text-leaf-600 uppercase tracking-widest mb-0.5">{{ info.label }}</div>
              <div class="text-night-800 font-medium text-sm leading-relaxed">{{ info.value }}</div>
            </div>
          </div>

          <!-- Map placeholder -->
          <div class="bg-leaf-200 rounded-2xl h-52 flex flex-col items-center justify-center shadow-sm overflow-hidden relative">
            <div class="absolute inset-0 opacity-30">
              <svg viewBox="0 0 400 208" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="80" r="50" fill="#16A34A" opacity="0.3"/>
                <circle cx="300" cy="140" r="70" fill="#22C55E" opacity="0.3"/>
                <circle cx="200" cy="60" r="40" fill="#4ADE80" opacity="0.4"/>
                <line x1="0" y1="104" x2="400" y2="104" stroke="#15803D" stroke-width="1" opacity="0.3"/>
                <line x1="200" y1="0" x2="200" y2="208" stroke="#15803D" stroke-width="1" opacity="0.3"/>
              </svg>
            </div>
            <div class="relative z-10 text-center">
              <div class="text-4xl mb-2">📍</div>
              <div class="text-leaf-700 font-semibold text-sm">Chiranjiv Powers HQ</div>
              <div class="text-leaf-600 text-xs mt-1">Rajasthan, India</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Leaf, Send, Phone, Mail, MapPin, Clock } from 'lucide-vue-next'

const labelRef = ref(null)
const headRef = ref(null)
const subRef = ref(null)
const formRef = ref(null)
const infoRef = ref(null)

const submitted = ref(false)
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
})

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '+91 98765 43210' },
  { icon: Mail, label: 'Email Us', value: 'hello@chiranjivpowers.com' },
  { icon: MapPin, label: 'Visit Us', value: '42, Solar Park Road, Jaipur, Rajasthan 302001' },
  { icon: Clock, label: 'Working Hours', value: 'Mon – Sat: 9:00 AM – 6:00 PM' },
]

function handleSubmit() {
  submitted.value = true
  form.value = { firstName: '', lastName: '', email: '', phone: '', interest: '', message: '' }
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

  const elements = [labelRef.value, headRef.value, subRef.value, formRef.value, infoRef.value]
  elements.forEach((el) => { if (el) observer.observe(el) })
})
</script>
