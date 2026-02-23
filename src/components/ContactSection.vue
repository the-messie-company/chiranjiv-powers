<template>
  <section id="contact" class="py-20 lg:py-28 bg-night-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div ref="headerRef" class="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
        <span class="inline-block px-4 py-1.5 rounded-full bg-solar-500/20 border border-solar-500/30 text-solar-300 text-sm font-semibold mb-4">
          Get In Touch
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
          Ready to Go Solar?
        </h2>
        <p class="text-night-400 text-lg leading-relaxed">
          Fill in the form and our team will reach out within 24 hours to schedule your free consultation.
        </p>
      </div>

      <!-- Split columns -->
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16">
        <!-- Form -->
        <div ref="formRef" class="animate-fade-up">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-night-300 mb-1.5">Full Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Your name"
                  class="w-full px-4 py-3 rounded-xl bg-night-800 border border-night-700 text-white placeholder-night-500 focus:outline-none focus:border-solar-500 focus:ring-1 focus:ring-solar-500 transition-colors"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-night-300 mb-1.5">Phone Number</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  class="w-full px-4 py-3 rounded-xl bg-night-800 border border-night-700 text-white placeholder-night-500 focus:outline-none focus:border-solar-500 focus:ring-1 focus:ring-solar-500 transition-colors"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-night-300 mb-1.5">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                class="w-full px-4 py-3 rounded-xl bg-night-800 border border-night-700 text-white placeholder-night-500 focus:outline-none focus:border-solar-500 focus:ring-1 focus:ring-solar-500 transition-colors"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-night-300 mb-1.5">Property Address</label>
              <input
                v-model="form.address"
                type="text"
                placeholder="Installation address"
                class="w-full px-4 py-3 rounded-xl bg-night-800 border border-night-700 text-white placeholder-night-500 focus:outline-none focus:border-solar-500 focus:ring-1 focus:ring-solar-500 transition-colors"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-night-300 mb-1.5">Message</label>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Tell us about your requirements..."
                class="w-full px-4 py-3 rounded-xl bg-night-800 border border-night-700 text-white placeholder-night-500 focus:outline-none focus:border-solar-500 focus:ring-1 focus:ring-solar-500 transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full py-4 rounded-xl bg-solar-500 hover:bg-solar-400 text-night-900 font-bold text-base transition-all shadow-lg hover:shadow-solar-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Send :size="18" />
              Send Message
            </button>
            <p v-if="submitted" class="text-leaf-400 text-sm text-center font-medium">
              ✓ Message sent! We'll be in touch within 24 hours.
            </p>
          </form>
        </div>

        <!-- Contact Info -->
        <div ref="infoRef" class="flex flex-col gap-6 animate-fade-up" style="transition-delay: 150ms">
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="flex items-start gap-4 p-5 rounded-2xl bg-night-800/50 border border-night-700"
          >
            <div class="w-11 h-11 rounded-xl bg-solar-500/20 flex items-center justify-center flex-shrink-0">
              <component :is="info.icon" :size="20" class="text-solar-400" />
            </div>
            <div>
              <div class="text-sm font-semibold text-night-400 mb-1">{{ info.label }}</div>
              <div class="text-white font-medium">{{ info.value }}</div>
              <div v-if="info.sub" class="text-night-400 text-sm mt-0.5">{{ info.sub }}</div>
            </div>
          </div>

          <!-- Map placeholder -->
          <div class="flex-1 min-h-48 rounded-2xl bg-night-800 border border-night-700 flex items-center justify-center">
            <div class="text-center text-night-500">
              <MapPin :size="32" class="mx-auto mb-2 text-night-600" />
              <p class="text-sm">Map placeholder</p>
              <p class="text-xs mt-1">Google Maps integration coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-vue-next'

const headerRef = ref(null)
const formRef = ref(null)
const infoRef = ref(null)
const submitted = ref(false)

const form = reactive({
  name: '',
  phone: '',
  email: '',
  address: '',
  message: '',
})

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 98765 43210', sub: 'Mon–Sat, 9 AM – 6 PM' },
  { icon: Mail, label: 'Email', value: 'info@chiranjivpowers.com', sub: 'We reply within 24 hours' },
  { icon: MapPin, label: 'Office Address', value: '123 Solar Park, Green District', sub: 'New Delhi, India – 110001' },
  { icon: Clock, label: 'Business Hours', value: 'Monday – Saturday', sub: '9:00 AM to 6:00 PM IST' },
]

function handleSubmit() {
  submitted.value = true
  Object.assign(form, { name: '', phone: '', email: '', address: '', message: '' })
  setTimeout(() => { submitted.value = false }, 5000)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.1 })

  if (headerRef.value) observer.observe(headerRef.value)
  if (formRef.value) observer.observe(formRef.value)
  if (infoRef.value) observer.observe(infoRef.value)
})
</script>
