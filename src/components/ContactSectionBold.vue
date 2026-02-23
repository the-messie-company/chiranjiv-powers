<template>
  <section id="contact" class="bg-solar-400 relative overflow-hidden">
    <!-- Background watermark -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <span class="text-night-900 font-black uppercase leading-none" style="font-size: 200px; opacity: 0.06; white-space: nowrap;">CONTACT</span>
    </div>

    <div class="relative z-10 grid lg:grid-cols-2">

      <!-- LEFT: Form on night-900 bg -->
      <div class="bg-night-900 px-8 lg:px-14 py-16 lg:py-20">
        <div class="animate-fade-up" ref="formHeaderEl">
          <span class="text-solar-400 text-xs font-black uppercase tracking-[0.3em] block mb-4">Get In Touch</span>
          <h2 class="text-4xl lg:text-5xl font-black text-white uppercase leading-tight mb-10">
            Request A<br />
            <span class="text-solar-400">Free Quote</span>
          </h2>
        </div>

        <form class="space-y-5 animate-fade-up" ref="formEl" @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label class="text-night-400 text-xs font-black uppercase tracking-[0.15em] block mb-2">Full Name *</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Rajesh Kulkarni"
                required
                class="w-full bg-night-800 text-white text-sm px-4 py-3 border border-night-700 focus:border-solar-400 focus:outline-none transition-colors placeholder:text-night-600"
              />
            </div>
            <div>
              <label class="text-night-400 text-xs font-black uppercase tracking-[0.15em] block mb-2">Phone *</label>
              <input
                v-model="form.phone"
                type="tel"
                placeholder="+91 98765 43210"
                required
                class="w-full bg-night-800 text-white text-sm px-4 py-3 border border-night-700 focus:border-solar-400 focus:outline-none transition-colors placeholder:text-night-600"
              />
            </div>
          </div>

          <div>
            <label class="text-night-400 text-xs font-black uppercase tracking-[0.15em] block mb-2">Email Address</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="you@example.com"
              class="w-full bg-night-800 text-white text-sm px-4 py-3 border border-night-700 focus:border-solar-400 focus:outline-none transition-colors placeholder:text-night-600"
            />
          </div>

          <div>
            <label class="text-night-400 text-xs font-black uppercase tracking-[0.15em] block mb-2">Installation Type</label>
            <select
              v-model="form.type"
              class="w-full bg-night-800 text-white text-sm px-4 py-3 border border-night-700 focus:border-solar-400 focus:outline-none transition-colors"
            >
              <option value="" disabled>Select type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
              <option value="amc">AMC / Servicing</option>
            </select>
          </div>

          <div>
            <label class="text-night-400 text-xs font-black uppercase tracking-[0.15em] block mb-2">Message</label>
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Tell us about your project — location, approximate requirement, any questions..."
              class="w-full bg-night-800 text-white text-sm px-4 py-3 border border-night-700 focus:border-solar-400 focus:outline-none transition-colors placeholder:text-night-600 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-solar-400 text-night-900 font-black text-sm uppercase tracking-[0.2em] py-4 hover:bg-solar-300 transition-colors duration-200"
          >
            Send Message &rarr;
          </button>

          <p v-if="submitted" class="text-solar-400 text-sm font-bold text-center mt-2">
            Thank you! We'll contact you within 24 hours.
          </p>
        </form>
      </div>

      <!-- RIGHT: Contact info on solar-400 bg -->
      <div class="px-8 lg:px-14 py-16 lg:py-20 flex flex-col justify-between">
        <div class="animate-fade-up" ref="infoEl">
          <h3 class="text-night-900 font-black text-3xl lg:text-4xl uppercase leading-tight mb-10">
            Let's Power Your<br />Future Together
          </h3>

          <div class="space-y-8">
            <div v-for="info in contactInfo" :key="info.label" class="flex gap-5 items-start">
              <div class="bg-night-900 p-3 shrink-0">
                <component :is="info.icon" :size="20" class="text-solar-400" />
              </div>
              <div>
                <div class="text-night-800 text-xs font-black uppercase tracking-[0.15em] mb-1">{{ info.label }}</div>
                <div class="text-night-900 font-bold text-base leading-snug">{{ info.value }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom business hours -->
        <div class="mt-12 border-t-2 border-night-900 border-opacity-20 pt-8 animate-fade-up" ref="hoursEl">
          <div class="text-night-800 text-xs font-black uppercase tracking-[0.2em] mb-4">Business Hours</div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <div class="text-night-900 font-bold text-sm">Mon – Sat</div>
              <div class="text-night-800 text-sm">9:00 AM – 7:00 PM</div>
            </div>
            <div>
              <div class="text-night-900 font-bold text-sm">Sunday</div>
              <div class="text-night-800 text-sm">10:00 AM – 4:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Phone, Mail, MapPin } from 'lucide-vue-next'

const formHeaderEl = ref(null)
const formEl = ref(null)
const infoEl = ref(null)
const hoursEl = ref(null)
const submitted = ref(false)

const form = reactive({
  name: '',
  phone: '',
  email: '',
  type: '',
  message: '',
})

const contactInfo = [
  {
    icon: Phone,
    label: 'Call / WhatsApp',
    value: '+91 98765 43210',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@chiranjivpowers.com',
  },
  {
    icon: MapPin,
    label: 'Head Office',
    value: '12, Ganesh Nagar, Hadapsar, Pune – 411028, Maharashtra',
  },
]

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    Object.assign(form, { name: '', phone: '', email: '', type: '', message: '' })
  }, 4000)
}

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

  const els = [formHeaderEl.value, formEl.value, infoEl.value, hoursEl.value]
  els.forEach((el, i) => {
    if (el) {
      el.style.transitionDelay = `${i * 0.1}s`
      observer.observe(el)
    }
  })
})
</script>
