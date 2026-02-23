<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 group">
          <div class="w-9 h-9 rounded-full bg-solar-500 flex items-center justify-center shadow-md group-hover:bg-solar-600 transition-colors">
            <Sun :size="20" class="text-white" />
          </div>
          <span
            class="text-lg font-bold tracking-tight transition-colors"
            :class="scrolled ? 'text-night-900' : 'text-white'"
          >
            Chiranjiv Powers
          </span>
        </a>

        <!-- Desktop Nav Links -->
        <div class="hidden lg:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium transition-colors hover:text-solar-500"
            :class="scrolled ? 'text-night-600' : 'text-white/90'"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- CTA + Mobile Toggle -->
        <div class="flex items-center gap-3">
          <a
            href="#contact"
            class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-solar-500 hover:bg-solar-600 text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Free Quote
          </a>
          <button
            class="lg:hidden p-2 rounded-lg transition-colors"
            :class="scrolled ? 'text-night-700 hover:bg-night-100' : 'text-white hover:bg-white/10'"
            @click="mobileOpen = !mobileOpen"
            aria-label="Toggle menu"
          >
            <Menu v-if="!mobileOpen" :size="22" />
            <X v-else :size="22" />
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
      <div v-if="mobileOpen" class="lg:hidden bg-white border-t border-night-100 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="px-4 py-3 rounded-lg text-night-700 font-medium hover:bg-solar-50 hover:text-solar-600 transition-colors"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            class="mt-2 px-4 py-3 rounded-full bg-solar-500 hover:bg-solar-600 text-white font-semibold text-center transition-colors"
            @click="mobileOpen = false"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </Transition>
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
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]
</script>
