<template>
  <!-- Floating toggle button -->
  <div class="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-2">

    <!-- Panel -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-3 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-3 scale-95"
    >
      <div
        v-if="open"
        class="bg-white rounded-2xl shadow-2xl border border-night-100 w-72 overflow-hidden"
        style="box-shadow: 0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08);"
      >
        <!-- Header -->
        <div class="px-4 py-3 border-b border-night-100 flex items-center justify-between bg-night-50">
          <div>
            <p class="text-xs font-bold text-night-900 uppercase tracking-wider">Design Variants</p>
            <p class="text-xs text-night-400 mt-0.5">Share each link for client feedback</p>
          </div>
          <button
            @click="open = false"
            class="w-6 h-6 rounded-full flex items-center justify-center text-night-400 hover:bg-night-200 hover:text-night-700 transition-colors"
          >
            <X :size="13" />
          </button>
        </div>

        <!-- Design list -->
        <div class="p-2 flex flex-col gap-1">
          <button
            v-for="design in designs"
            :key="design.id"
            @click="select(design.id)"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all group relative"
            :class="current === design.id
              ? 'bg-night-900 text-white'
              : 'hover:bg-night-50 text-night-700'"
          >
            <!-- Color swatches -->
            <div class="flex gap-0.5 flex-shrink-0">
              <span
                v-for="color in design.colors"
                :key="color"
                class="w-3 h-8 rounded-sm first:rounded-l-md last:rounded-r-md"
                :style="{ background: color }"
              ></span>
            </div>

            <!-- Label -->
            <div class="flex-1 min-w-0">
              <p class="text-xs font-bold leading-tight truncate">{{ design.label }}</p>
              <p class="text-xs mt-0.5 leading-tight truncate"
                :class="current === design.id ? 'text-night-300' : 'text-night-400'"
              >{{ design.desc }}</p>
            </div>

            <!-- Active dot -->
            <span
              v-if="current === design.id"
              class="w-1.5 h-1.5 rounded-full bg-solar-400 flex-shrink-0"
            ></span>

            <!-- Copy link button (shows on hover) -->
            <button
              v-if="current !== design.id"
              @click.stop="copyLink(design.id)"
              class="opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 rounded-lg flex items-center justify-center text-night-400 hover:bg-night-200 hover:text-night-700 flex-shrink-0"
              :title="`Copy link to ${design.label}`"
            >
              <Check v-if="copied === design.id" :size="12" class="text-leaf-500" />
              <Link2 v-else :size="12" />
            </button>

            <!-- Copy link when active -->
            <button
              v-if="current === design.id"
              @click.stop="copyLink(design.id)"
              class="w-6 h-6 rounded-lg flex items-center justify-center text-night-300 hover:bg-night-700 transition-colors flex-shrink-0"
              :title="`Copy link to ${design.label}`"
            >
              <Check v-if="copied === design.id" :size="12" class="text-solar-400" />
              <Link2 v-else :size="12" />
            </button>
          </button>
        </div>

        <!-- Footer hint -->
        <div class="px-4 py-2.5 border-t border-night-100 bg-night-50">
          <p class="text-xs text-night-400 flex items-center gap-1.5">
            <Link2 :size="10" />
            Click <Link2 :size="10" class="inline" /> to copy a shareable link
          </p>
        </div>
      </div>
    </Transition>

    <!-- Toggle button -->
    <button
      @click="open = !open"
      class="flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
      :class="open
        ? 'bg-night-900 text-white shadow-night-900/30'
        : 'bg-white text-night-700 border border-night-200 hover:border-night-300 shadow-night-100/50'"
      style="box-shadow: 0 4px 16px rgba(0,0,0,0.12);"
    >
      <Palette :size="15" />
      <span class="text-xs font-bold tracking-wide">Designs</span>
      <!-- Active design swatch -->
      <span class="flex gap-0.5 ml-0.5">
        <span
          v-for="color in activeDesign.colors"
          :key="color"
          class="w-2 h-3.5 rounded-sm"
          :style="{ background: color }"
        ></span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Palette, X, Link2, Check } from 'lucide-vue-next'

const props = defineProps({
  current: { type: String, required: true },
})
const emit = defineEmits(['change'])

const open = ref(false)
const copied = ref(null)

const designs = [
  {
    id: 'original',
    label: 'Original',
    desc: 'Clean, professional, light',
    colors: ['#0F172A', '#EAB308', '#F0FDF4'],
  },
  {
    id: 'bold',
    label: 'Bold & Industrial',
    desc: 'High-contrast, sharp edges',
    colors: ['#0F172A', '#FACC15', '#FFFFFF'],
  },
  {
    id: 'organic',
    label: 'Organic & Earthy',
    desc: 'Natural, warm, wavy',
    colors: ['#16A34A', '#FEFCE8', '#EAB308'],
  },
  {
    id: 'dark',
    label: 'Dark & Futuristic',
    desc: 'Glassmorphism, neon glow',
    colors: ['#0F172A', '#EAB308', '#22D3EE'],
  },
  {
    id: 'playful',
    label: 'Playful & Illustrated',
    desc: 'Fun, retro, illustrated',
    colors: ['#FACC15', '#4ADE80', '#FB923C'],
  },
]

const activeDesign = computed(() => designs.find(d => d.id === props.current) ?? designs[0])

function select(id) {
  emit('change', id)
  open.value = false
}

function copyLink(id) {
  const url = new URL(window.location.href)
  url.searchParams.set('design', id)
  navigator.clipboard.writeText(url.toString())
  copied.value = id
  setTimeout(() => { copied.value = null }, 2000)
}
</script>
