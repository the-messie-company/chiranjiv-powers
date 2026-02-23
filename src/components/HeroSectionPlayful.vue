<template>
  <section class="relative min-h-screen bg-solar-50 overflow-hidden flex items-center">
    <!-- Subtle background pattern dots -->
    <svg class="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.5" fill="#FDE047"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-dots)"/>
    </svg>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-16 w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- LEFT: Text Content -->
        <div class="animate-fade-up" ref="textRef">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-solar-200 text-night-700 text-sm font-semibold mb-6 border-2 border-solar-300">
            <span>☀️</span>
            <span>Clean Energy for Everyone</span>
          </div>

          <!-- Headline -->
          <h1 class="text-5xl sm:text-6xl font-black text-night-900 leading-tight mb-6">
            We Put the
            <span class="bg-solar-400 px-2 py-1 rounded-lg inline-block">Sun</span>
            to Work<br/>for You!
          </h1>

          <!-- Subtext -->
          <p class="text-lg text-night-600 mb-8 leading-relaxed max-w-lg">
            Affordable, reliable solar installation for homes and small businesses. We make going solar simple, local, and worth every rupee.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <a
              href="#contact"
              class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-night-900 text-solar-400 font-bold text-lg transition-all hover:-translate-y-1"
              style="box-shadow: 4px 4px 0px #FACC15;"
            >
              Get Free Quote 🚀
            </a>
            <a
              href="#services"
              class="text-night-700 font-semibold underline underline-offset-4 hover:text-orange-500 transition-colors text-lg"
            >
              Learn More ↓
            </a>
          </div>

          <!-- Trust badges -->
          <div class="flex flex-wrap items-center gap-4">
            <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-solar-200 shadow-sm">
              <span class="text-solar-400 font-bold">★</span>
              <span class="text-night-700 font-semibold text-sm">50+ Installs</span>
            </div>
            <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-leaf-200 shadow-sm">
              <span class="text-leaf-500 font-bold">✓</span>
              <span class="text-night-700 font-semibold text-sm">5yr Warranty</span>
            </div>
            <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-orange-200 shadow-sm">
              <span class="text-orange-500 font-bold">⚡</span>
              <span class="text-night-700 font-semibold text-sm">Fast Install</span>
            </div>
          </div>
        </div>

        <!-- RIGHT: SVG House Illustration -->
        <div class="animate-fade-up flex flex-col items-center gap-6" ref="illustrationRef" style="transition-delay: 0.2s;">
          <div class="w-full max-w-md">
            <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto drop-shadow-xl">
              <!-- Sky background -->
              <rect x="0" y="0" width="400" height="260" rx="24" fill="#BAE6FD"/>

              <!-- Cloud 1 -->
              <g opacity="0.95">
                <ellipse cx="80" cy="65" rx="35" ry="20" fill="white"/>
                <ellipse cx="100" cy="58" rx="28" ry="18" fill="white"/>
                <ellipse cx="118" cy="65" rx="22" ry="16" fill="white"/>
                <ellipse cx="62" cy="68" rx="18" ry="13" fill="white"/>
              </g>

              <!-- Cloud 2 (smaller) -->
              <g opacity="0.85">
                <ellipse cx="300" cy="42" rx="28" ry="16" fill="white"/>
                <ellipse cx="316" cy="36" rx="22" ry="14" fill="white"/>
                <ellipse cx="332" cy="42" rx="18" ry="13" fill="white"/>
              </g>

              <!-- Sun (top right) -->
              <g>
                <!-- Rays -->
                <line x1="340" y1="48" x2="340" y2="35" stroke="#FACC15" stroke-width="3" stroke-linecap="round"/>
                <line x1="340" y1="88" x2="340" y2="101" stroke="#FACC15" stroke-width="3" stroke-linecap="round"/>
                <line x1="320" y1="68" x2="307" y2="68" stroke="#FACC15" stroke-width="3" stroke-linecap="round"/>
                <line x1="360" y1="68" x2="373" y2="68" stroke="#FACC15" stroke-width="3" stroke-linecap="round"/>
                <line x1="326" y1="54" x2="317" y2="45" stroke="#FACC15" stroke-width="3" stroke-linecap="round"/>
                <line x1="354" y1="82" x2="363" y2="91" stroke="#FACC15" stroke-width="3" stroke-linecap="round"/>
                <line x1="354" y1="54" x2="363" y2="45" stroke="#FACC15" stroke-width="3" stroke-linecap="round"/>
                <line x1="326" y1="82" x2="317" y2="91" stroke="#FACC15" stroke-width="3" stroke-linecap="round"/>
                <!-- Circle -->
                <circle cx="340" cy="68" r="18" fill="#FACC15"/>
                <circle cx="340" cy="68" r="12" fill="#FDE047"/>
              </g>

              <!-- House body -->
              <rect x="120" y="170" width="180" height="110" rx="4" fill="#1E293B"/>

              <!-- Door -->
              <rect x="181" y="218" width="38" height="62" rx="4" fill="#334155"/>
              <circle cx="213" cy="249" r="3" fill="#FACC15"/>

              <!-- Windows -->
              <rect x="134" y="185" width="38" height="32" rx="4" fill="#7DD3FC"/>
              <line x1="153" y1="185" x2="153" y2="217" stroke="#1E293B" stroke-width="1.5"/>
              <line x1="134" y1="201" x2="172" y2="201" stroke="#1E293B" stroke-width="1.5"/>

              <rect x="248" y="185" width="38" height="32" rx="4" fill="#7DD3FC"/>
              <line x1="267" y1="185" x2="267" y2="217" stroke="#1E293B" stroke-width="1.5"/>
              <line x1="248" y1="201" x2="286" y2="201" stroke="#1E293B" stroke-width="1.5"/>

              <!-- Roof -->
              <polygon points="105,175 210,105 315,175" fill="#0F172A"/>

              <!-- Solar panels on roof -->
              <!-- Left panel group -->
              <g transform="rotate(-29, 175, 140)">
                <rect x="138" y="133" width="40" height="26" rx="2" fill="#1a2744"/>
                <rect x="140" y="135" width="17" height="11" rx="1" fill="#1e3a8a" stroke="#3b82f6" stroke-width="0.5"/>
                <rect x="159" y="135" width="17" height="11" rx="1" fill="#1e3a8a" stroke="#3b82f6" stroke-width="0.5"/>
                <rect x="140" y="147" width="17" height="10" rx="1" fill="#1e3a8a" stroke="#3b82f6" stroke-width="0.5"/>
                <rect x="159" y="147" width="17" height="10" rx="1" fill="#1e3a8a" stroke="#3b82f6" stroke-width="0.5"/>
              </g>

              <!-- Right panel group -->
              <g transform="rotate(29, 245, 140)">
                <rect x="224" y="133" width="40" height="26" rx="2" fill="#1a2744"/>
                <rect x="226" y="135" width="17" height="11" rx="1" fill="#1e3a8a" stroke="#3b82f6" stroke-width="0.5"/>
                <rect x="245" y="135" width="17" height="11" rx="1" fill="#1e3a8a" stroke="#3b82f6" stroke-width="0.5"/>
                <rect x="226" y="147" width="17" height="10" rx="1" fill="#1e3a8a" stroke="#3b82f6" stroke-width="0.5"/>
                <rect x="245" y="147" width="17" height="10" rx="1" fill="#1e3a8a" stroke="#3b82f6" stroke-width="0.5"/>
              </g>

              <!-- Ground/grass -->
              <rect x="0" y="260" width="400" height="60" rx="0" fill="#4ADE80"/>
              <ellipse cx="200" cy="260" rx="400" ry="18" fill="#22C55E"/>

              <!-- Grass tufts -->
              <path d="M60 258 Q65 248 70 258" fill="#16A34A"/>
              <path d="M320 255 Q326 244 332 255" fill="#16A34A"/>
              <path d="M150 260 Q154 252 158 260" fill="#16A34A"/>
            </svg>
          </div>

          <!-- Stat pills below illustration -->
          <div class="flex flex-wrap justify-center gap-3">
            <span class="px-5 py-2.5 rounded-full bg-solar-400 text-night-900 font-bold text-sm border-2 border-solar-500">
              50+ Projects ⚡
            </span>
            <span class="px-5 py-2.5 rounded-full bg-leaf-400 text-night-900 font-bold text-sm border-2 border-leaf-500">
              500+ kW Installed 🌿
            </span>
            <span class="px-5 py-2.5 rounded-full bg-orange-400 text-white font-bold text-sm border-2 border-orange-500">
              100% Satisfied 😊
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const textRef = ref(null)
const illustrationRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )
  if (textRef.value) observer.observe(textRef.value)
  if (illustrationRef.value) observer.observe(illustrationRef.value)
})
</script>
