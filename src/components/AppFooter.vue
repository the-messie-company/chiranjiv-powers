<template>
  <footer class="bg-night-900 border-t border-night-800">
    <!-- Main footer content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8">
        <!-- Brand column -->
        <div class="lg:col-span-1">
          <a href="#" class="flex items-center gap-2 mb-4">
            <div class="w-9 h-9 rounded-full bg-solar-500 flex items-center justify-center">
              <Sun :size="20" class="text-white" />
            </div>
            <span class="text-white font-bold text-lg">Chiranjiv Powers</span>
          </a>
          <p class="text-night-400 text-sm leading-relaxed mb-6">
            Empowering homes and businesses with clean, reliable solar energy solutions. Your trusted partner in the renewable energy transition.
          </p>
          <!-- Social icons -->
          <div class="flex items-center gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="w-9 h-9 rounded-lg bg-night-800 hover:bg-solar-500 flex items-center justify-center text-night-400 hover:text-white transition-all"
            >
              <component :is="social.icon" :size="16" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.label">
              <a :href="link.href" class="text-night-400 hover:text-solar-400 text-sm transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Services</h4>
          <ul class="space-y-3">
            <li v-for="service in serviceLinks" :key="service">
              <a href="#services" class="text-night-400 hover:text-solar-400 text-sm transition-colors">
                {{ service }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <Phone :size="15" class="text-solar-400 flex-shrink-0 mt-0.5" />
              <span class="text-night-400 text-sm">+91 98765 43210</span>
            </li>
            <li class="flex items-start gap-3">
              <Mail :size="15" class="text-solar-400 flex-shrink-0 mt-0.5" />
              <span class="text-night-400 text-sm">info@chiranjivpowers.com</span>
            </li>
            <li class="flex items-start gap-3">
              <MapPin :size="15" class="text-solar-400 flex-shrink-0 mt-0.5" />
              <span class="text-night-400 text-sm">123 Solar Park, Green District,<br />New Delhi – 110001</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-leaf-600/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-night-500 text-sm">
          © {{ new Date().getFullYear() }} Chiranjiv Powers. All rights reserved.
        </p>
        <div class="flex items-center gap-1 text-night-500 text-sm">
          <span>Made with</span>
          <span class="text-solar-400 font-bold">☀</span>
          <span>for a greener tomorrow</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Sun, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-vue-next'

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
]

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact Us', href: '#contact' },
]

const serviceLinks = [
  'Residential Solar Installation',
  'Commercial Solar Installation',
  'Battery Storage Systems',
  'After-Sales & AMC Services',
]
</script>
