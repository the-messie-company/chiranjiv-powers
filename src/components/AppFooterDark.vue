<template>
  <footer class="relative bg-black overflow-hidden">

    <!-- Top glow line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar-400/50 to-transparent"></div>

    <!-- Ambient radial -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
      style="background: radial-gradient(ellipse at top, rgba(250,204,21,0.04) 0%, transparent 70%);"
    ></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Main Footer Content -->
      <div class="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <a href="/" class="flex items-center gap-3 group mb-5">
            <div
              class="w-9 h-9 rounded-lg bg-solar-400/10 border border-solar-400/30 flex items-center justify-center"
              :style="{ boxShadow: '0 0 12px rgba(250,204,21,0.15)' }"
            >
              <Zap class="w-5 h-5 text-solar-400" />
            </div>
            <span class="text-white font-black text-lg tracking-tight">
              <span class="text-solar-400">Chiranjiv</span> Powers
            </span>
          </a>
          <p class="text-night-400 text-sm leading-relaxed mb-6">
            Engineering the solar transition for homes, businesses, and the grid. Built to last. Monitored to perform.
          </p>

          <!-- Social Icons -->
          <div class="flex items-center gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-night-400 hover:text-solar-400 hover:bg-solar-400/10 hover:border-solar-400/30 transition-all duration-300"
            >
              <component :is="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Links Columns -->
        <div v-for="column in footerLinks" :key="column.title">
          <h4 class="font-mono text-xs text-night-500 uppercase tracking-widest mb-5">{{ column.title }}</h4>
          <ul class="flex flex-col gap-3">
            <li v-for="link in column.links" :key="link.label">
              <a
                :href="link.href"
                class="text-night-400 hover:text-solar-400 text-sm transition-colors duration-200"
              >{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div>
          <h4 class="font-mono text-xs text-night-500 uppercase tracking-widest mb-5">Contact</h4>
          <ul class="flex flex-col gap-4">
            <li class="flex items-start gap-3 text-night-400 text-sm">
              <Phone class="w-4 h-4 text-solar-400 mt-0.5 flex-shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li class="flex items-start gap-3 text-night-400 text-sm">
              <Mail class="w-4 h-4 text-solar-400 mt-0.5 flex-shrink-0" />
              <span>info@chiranjivpowers.com</span>
            </li>
            <li class="flex items-start gap-3 text-night-400 text-sm">
              <MapPin class="w-4 h-4 text-solar-400 mt-0.5 flex-shrink-0" />
              <span>Pune, Maharashtra, India</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-night-500 text-xs font-mono">
          &copy; {{ currentYear }} Chiranjiv Powers. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-night-500 hover:text-night-300 text-xs transition-colors duration-200">Privacy Policy</a>
          <a href="#" class="text-night-500 hover:text-night-300 text-xs transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { Zap, Phone, Mail, MapPin, Twitter, Linkedin, Instagram, Youtube } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Residential Solar', href: '#services' },
      { label: 'Commercial Solar', href: '#services' },
      { label: 'Industrial Solar', href: '#services' },
      { label: 'Solar Farms', href: '#services' },
      { label: 'O&M Services', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#why-us' },
      { label: 'Our Process', href: '#process' },
      { label: 'Projects', href: '#projects' },
      { label: 'Testimonials', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
]
</script>
