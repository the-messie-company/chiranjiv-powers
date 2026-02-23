<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-night-900 transition-all duration-300"
    :class="scrolled ? 'border-b-2 border-solar-400' : 'border-b-2 border-transparent'"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="text-solar-400">
            <Sun :size="28" :stroke-width="2.5" />
          </div>
          <span class="text-white font-black text-sm tracking-[0.2em] uppercase group-hover:text-solar-400 transition-colors">
            Chiranjiv Powers
          </span>
        </a>

        <!-- Desktop Nav Links -->
        <div class="hidden lg:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-white text-xs font-bold uppercase tracking-[0.15em] hover:text-solar-400 transition-colors duration-200"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- CTA + Hamburger -->
        <div class="flex items-center gap-4">
          <a
            href="#contact"
            class="hidden lg:block bg-solar-400 text-night-900 text-xs font-black uppercase tracking-[0.15em] px-6 py-3 hover:bg-solar-300 transition-colors duration-200"
          >
            Free Quote
          </a>
          <button
            class="lg:hidden text-white hover:text-solar-400 transition-colors"
            @click="mobileOpen = !mobileOpen"
            aria-label="Toggle menu"
          >
            <Menu v-if="!mobileOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="mobileOpen"
      class="lg:hidden bg-night-900 border-t border-night-800"
    >
      <div class="px-6 py-4 flex flex-col gap-4">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-white text-xs font-bold uppercase tracking-[0.15em] hover:text-solar-400 transition-colors py-2 border-b border-night-800"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a
          href="#contact"
          class="bg-solar-400 text-night-900 text-xs font-black uppercase tracking-[0.15em] px-6 py-3 text-center hover:bg-solar-300 transition-colors mt-2"
          @click="mobileOpen = false"
        >
          Free Quote
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { Sun, Menu, X } from 'lucide-vue-next'

const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 60)
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
</script>
