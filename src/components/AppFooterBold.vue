<template>
  <footer class="bg-night-900 relative overflow-hidden">
    <!-- Solar-400 top line -->
    <div class="h-1 w-full bg-solar-400"></div>

    <!-- Background watermark -->
    <div class="absolute inset-0 flex items-end justify-start pointer-events-none select-none overflow-hidden pb-8 pl-4">
      <span class="text-white font-black uppercase leading-none" style="font-size: 140px; opacity: 0.02;">SOLAR</span>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

        <!-- Column 1: Brand -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="text-solar-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            </div>
            <span class="text-white font-black text-sm tracking-[0.2em] uppercase">Chiranjiv Powers</span>
          </div>
          <p class="text-night-400 text-sm leading-relaxed mb-6">
            Maharashtra's trusted solar installation partner. We design, supply, and install high-efficiency solar systems for homes, businesses, and industries.
          </p>
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              class="w-9 h-9 border border-night-700 flex items-center justify-center text-night-400 hover:border-solar-400 hover:text-solar-400 transition-colors"
              :aria-label="social.label"
            >
              <component :is="social.icon" :size="16" />
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h4 class="text-white font-black text-xs uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
            <span class="w-6 h-0.5 bg-solar-400 inline-block"></span>
            Quick Links
          </h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-night-400 text-sm hover:text-solar-400 transition-colors uppercase tracking-wider font-medium flex items-center gap-2 group"
              >
                <span class="text-solar-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Contact Summary -->
        <div>
          <h4 class="text-white font-black text-xs uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
            <span class="w-6 h-0.5 bg-solar-400 inline-block"></span>
            Contact
          </h4>
          <div class="space-y-4">
            <div v-for="item in contactItems" :key="item.text" class="flex gap-3 items-start">
              <div class="text-solar-400 shrink-0 mt-0.5">
                <component :is="item.icon" :size="14" />
              </div>
              <span class="text-night-400 text-sm leading-relaxed">{{ item.text }}</span>
            </div>
          </div>

          <!-- MNRE badge -->
          <div class="mt-8 border border-night-800 p-4 inline-block">
            <div class="text-solar-400 text-xs font-black uppercase tracking-wider">MNRE Empanelled</div>
            <div class="text-night-500 text-xs mt-1">Govt. of India Recognised</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright bar -->
    <div class="border-t-2 border-solar-400 border-opacity-20 bg-night-900">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-night-500 text-xs uppercase tracking-[0.15em]">
          &copy; {{ new Date().getFullYear() }} Chiranjiv Powers. All Rights Reserved.
        </p>
        <div class="flex gap-6">
          <a href="#" class="text-night-600 text-xs uppercase tracking-wider hover:text-solar-400 transition-colors">Privacy</a>
          <a href="#" class="text-night-600 text-xs uppercase tracking-wider hover:text-solar-400 transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-vue-next'

const socials = [
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'YouTube', href: '#', icon: Youtube },
]

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const contactItems = [
  { icon: Phone, text: '+91 98765 43210' },
  { icon: Mail, text: 'info@chiranjivpowers.com' },
  { icon: MapPin, text: '12, Ganesh Nagar, Hadapsar, Pune – 411028' },
]
</script>
