<template>
  <footer class="bg-leaf-800 relative">
    <!-- White wave flowing into leaf-800 -->
    <div class="overflow-hidden leading-none">
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" class="block w-full">
        <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" fill="#166534" />
      </svg>
    </div>

    <!-- Subtle leaf blob decorations -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <svg class="absolute top-10 right-10 w-48 h-48 opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 10 C140 0 190 40 195 90 C200 140 170 185 120 195 C70 205 20 175 10 125 C0 75 30 25 100 10 Z" fill="white"/>
      </svg>
      <svg class="absolute bottom-10 left-10 w-32 h-32 opacity-5" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M70 5 C100 -5 135 25 138 65 C141 105 115 135 75 138 C35 141 5 115 5 75 C5 35 35 15 70 5 Z" fill="white"/>
      </svg>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand column -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-9 h-9 rounded-full bg-leaf-600 flex items-center justify-center">
              <Sun :size="20" class="text-white" />
            </div>
            <span class="text-white font-bold text-lg">Chiranjiv Powers</span>
          </div>
          <p class="text-leaf-200 text-sm leading-relaxed mb-5">
            Growing a cleaner, greener future — one rooftop at a time. Sustainable solar energy for homes and businesses across India.
          </p>
          <!-- Social icons -->
          <div class="flex items-center gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="w-9 h-9 rounded-full bg-leaf-700 hover:bg-leaf-600 flex items-center justify-center transition-colors"
            >
              <component :is="social.icon" :size="16" class="text-leaf-200" />
            </a>
          </div>
        </div>

        <!-- Services column -->
        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-widest mb-5">Services</h4>
          <ul class="space-y-3">
            <li v-for="link in serviceLinks" :key="link">
              <a href="#services" class="text-leaf-200 hover:text-white text-sm transition-colors flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-leaf-400 flex-shrink-0"></span>
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company column -->
        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-widest mb-5">Company</h4>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.label">
              <a :href="link.href" class="text-leaf-200 hover:text-white text-sm transition-colors flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-leaf-400 flex-shrink-0"></span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact column -->
        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <MapPin :size="15" class="text-leaf-400 mt-0.5 flex-shrink-0" />
              <span class="text-leaf-200 text-sm leading-relaxed">42 Solar Park Road, Jaipur, Rajasthan 302001</span>
            </li>
            <li class="flex items-center gap-3">
              <Phone :size="15" class="text-leaf-400 flex-shrink-0" />
              <a href="tel:+919876543210" class="text-leaf-200 hover:text-white text-sm transition-colors">+91 98765 43210</a>
            </li>
            <li class="flex items-center gap-3">
              <Mail :size="15" class="text-leaf-400 flex-shrink-0" />
              <a href="mailto:hello@chiranjivpowers.com" class="text-leaf-200 hover:text-white text-sm transition-colors">hello@chiranjivpowers.com</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-14 pt-8 border-t border-leaf-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-leaf-300 text-sm">
          &copy; {{ currentYear }} Chiranjiv Powers. All rights reserved.
        </p>
        <div class="flex items-center gap-2 text-leaf-300 text-sm">
          <Leaf :size="14" class="text-leaf-400" />
          <span>Powered by clean energy, built with care.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Sun, Leaf, MapPin, Phone, Mail, Instagram, Twitter, Youtube, Linkedin } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

const serviceLinks = [
  'Residential Solar',
  'Commercial Solar',
  'Battery Storage',
  'Solar Maintenance',
  'EV Charging',
]

const companyLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Our Projects', href: '#projects' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]
</script>
