<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2.5 group">
          <!-- Custom SVG sun illustration -->
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-transform group-hover:rotate-12 duration-300">
            <!-- Rays -->
            <line x1="19" y1="2" x2="19" y2="7" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="19" y1="31" x2="19" y2="36" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="2" y1="19" x2="7" y2="19" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="31" y1="19" x2="36" y2="19" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="6.1" y1="6.1" x2="9.6" y2="9.6" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="28.4" y1="28.4" x2="31.9" y2="31.9" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="31.9" y1="6.1" x2="28.4" y2="9.6" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="9.6" y1="28.4" x2="6.1" y2="31.9" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Sun circle -->
            <circle cx="19" cy="19" r="8" fill="#FACC15"/>
            <circle cx="19" cy="19" r="5.5" fill="#FDE047"/>
          </svg>
          <span class="text-lg font-bold tracking-tight text-night-900">
            Chiranjiv Powers
          </span>
        </a>

        <!-- Desktop Nav Links -->
        <div class="hidden lg:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-semibold text-night-700 hover:text-orange-500 transition-colors relative group"
          >
            {{ link.label }}
            <span class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-400 rounded-full group-hover:w-full transition-all duration-200"></span>
          </a>
        </div>

        <!-- CTA + Mobile Toggle -->
        <div class="flex items-center gap-3">
          <a
            href="#contact"
            class="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-solar-400 hover:bg-solar-500 text-night-900 text-sm font-bold transition-all"
            style="box-shadow: 3px 3px 0 #A16207;"
          >
            Get Quote ✨
          </a>
          <button
            class="lg:hidden p-2 rounded-lg text-orange-500 hover:bg-orange-50 transition-colors"
            @click="mobileOpen = !mobileOpen"
            aria-label="Toggle menu"
          >
            <Menu v-if="!mobileOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="lg:hidden bg-white border-t-2 border-solar-200 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="px-4 py-3 rounded-xl text-night-700 font-semibold hover:bg-solar-50 hover:text-orange-500 transition-colors"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            class="mt-2 px-4 py-3 rounded-full bg-solar-400 hover:bg-solar-500 text-night-900 font-bold text-center transition-colors"
            style="box-shadow: 3px 3px 0 #A16207;"
            @click="mobileOpen = false"
          >
            Get Quote ✨
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { Menu, X } from 'lucide-vue-next'

const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 60)
const mobileOpen = ref(false)

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]
</script>
