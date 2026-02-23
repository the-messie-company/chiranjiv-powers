<template>
  <footer class="bg-night-900 relative overflow-hidden">
    <!-- Wavy SVG top separator -->
    <div class="absolute top-0 left-0 right-0 -translate-y-[1px] pointer-events-none">
      <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-12 sm:h-14" fill="#0F172A">
        <path d="M0,0 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"/>
      </svg>
    </div>

    <!-- Subtle polka-dot pattern in footer bg -->
    <svg class="absolute inset-0 w-full h-full opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="footer-dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2" fill="white"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#footer-dots)"/>
    </svg>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">

      <!-- Main footer grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        <!-- Brand column -->
        <div class="lg:col-span-1">
          <!-- Logo -->
          <a href="#" class="flex items-center gap-2.5 mb-4 group">
            <svg width="36" height="36" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-transform group-hover:rotate-12 duration-300">
              <line x1="19" y1="2" x2="19" y2="7" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="19" y1="31" x2="19" y2="36" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="2" y1="19" x2="7" y2="19" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="31" y1="19" x2="36" y2="19" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="6.1" y1="6.1" x2="9.6" y2="9.6" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="28.4" y1="28.4" x2="31.9" y2="31.9" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="31.9" y1="6.1" x2="28.4" y2="9.6" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="9.6" y1="28.4" x2="6.1" y2="31.9" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="19" cy="19" r="8" fill="#FACC15"/>
              <circle cx="19" cy="19" r="5.5" fill="#FDE047"/>
            </svg>
            <span class="text-white font-bold text-lg">Chiranjiv Powers</span>
          </a>
          <p class="text-night-400 text-sm leading-relaxed mb-5">
            Your friendly local solar experts. Helping homes and businesses across Gujarat harness clean, affordable energy.
          </p>
          <!-- Social icons -->
          <div class="flex items-center gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all hover:-translate-y-0.5"
              :class="social.bg"
            >
              <component :is="social.icon" :size="18" />
            </a>
          </div>
        </div>

        <!-- Services column -->
        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
          <ul class="flex flex-col gap-2.5">
            <li v-for="item in footerServices" :key="item">
              <a href="#services" class="text-night-400 text-sm hover:text-solar-400 transition-colors font-medium">
                {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company column -->
        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
          <ul class="flex flex-col gap-2.5">
            <li v-for="item in footerCompany" :key="item.label">
              <a :href="item.href" class="text-night-400 text-sm hover:text-solar-400 transition-colors font-medium">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact column -->
        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
          <ul class="flex flex-col gap-3">
            <li class="flex items-start gap-2 text-night-400 text-sm">
              <span class="mt-0.5">📞</span>
              <span>+91 98765 43210</span>
            </li>
            <li class="flex items-start gap-2 text-night-400 text-sm">
              <span class="mt-0.5">✉️</span>
              <span>hello@chiranjivpowers.com</span>
            </li>
            <li class="flex items-start gap-2 text-night-400 text-sm">
              <span class="mt-0.5">📍</span>
              <span>Satellite Road, Ahmedabad, Gujarat 380015</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom copyright bar -->
      <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-night-500 text-sm text-center sm:text-left">
          © {{ new Date().getFullYear() }} Chiranjiv Powers. All rights reserved.
          <span class="text-solar-400 ml-1">☀</span>
        </p>
        <div class="flex items-center gap-5">
          <a href="#" class="text-night-500 text-sm hover:text-solar-400 transition-colors">Privacy Policy</a>
          <a href="#" class="text-night-500 text-sm hover:text-solar-400 transition-colors">Terms of Service</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-vue-next'

const socials = [
  { label: 'Facebook', href: '#', icon: Facebook, bg: 'bg-solar-400 text-night-900 hover:bg-solar-500' },
  { label: 'Instagram', href: '#', icon: Instagram, bg: 'bg-leaf-400 text-night-900 hover:bg-leaf-500' },
  { label: 'Twitter', href: '#', icon: Twitter, bg: 'bg-orange-400 text-white hover:bg-orange-500' },
  { label: 'Youtube', href: '#', icon: Youtube, bg: 'bg-sky-300 text-night-900 hover:bg-sky-400' },
]

const footerServices = [
  'Residential Solar',
  'Commercial Solar',
  'Battery Storage',
  'Maintenance & AMC',
  'Net Metering Assistance',
]

const footerCompany = [
  { label: 'About Us', href: '#why-us' },
  { label: 'Our Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#' },
  { label: 'Contact', href: '#contact' },
]
</script>
