<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'bg-night-900/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">

        <!-- Logo -->
        <a href="/" class="flex items-center gap-3 group">
          <div
            class="w-9 h-9 rounded-lg bg-solar-400/10 border border-solar-400/30 flex items-center justify-center transition-all duration-300 group-hover:bg-solar-400/20"
            :style="{ boxShadow: '0 0 16px rgba(250,204,21,0.2)' }"
          >
            <Zap class="w-5 h-5 text-solar-400" />
          </div>
          <span class="text-white font-black text-lg tracking-tight">
            <span class="text-solar-400">Chiranjiv</span> Powers
          </span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-night-400 hover:text-white text-sm font-medium transition-colors duration-200 tracking-wide"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- CTA + Mobile Toggle -->
        <div class="flex items-center gap-4">
          <a
            href="#contact"
            class="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-solar-400 border border-solar-400/50 transition-all duration-300 hover:bg-solar-400/10"
            :style="{ boxShadow: hoverCta ? '0 0 20px rgba(250,204,21,0.25)' : 'none' }"
            @mouseenter="hoverCta = true"
            @mouseleave="hoverCta = false"
          >
            <Zap class="w-4 h-4" />
            Get Quote
          </a>

          <button
            class="lg:hidden w-9 h-9 flex items-center justify-center text-night-400 hover:text-white transition-colors"
            @click="mobileOpen = !mobileOpen"
            aria-label="Toggle menu"
          >
            <X v-if="mobileOpen" class="w-5 h-5" />
            <Menu v-else class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden bg-night-900 border-b border-white/10"
      >
        <div class="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-night-400 hover:text-white px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium transition-all duration-200"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
          <div class="pt-4 border-t border-white/10 mt-2">
            <a
              href="#contact"
              class="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-sm font-semibold text-solar-400 border border-solar-400/50 hover:bg-solar-400/10 transition-all duration-300"
              @click="mobileOpen = false"
            >
              <Zap class="w-4 h-4" />
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { Zap, Menu, X } from 'lucide-vue-next'

const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 60)

const mobileOpen = ref(false)
const hoverCta = ref(false)

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
</script>
