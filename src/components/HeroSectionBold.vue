<template>
  <section class="min-h-screen bg-night-900 flex flex-col pt-16 overflow-hidden">
    <!-- Main split layout -->
    <div class="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-20">

      <!-- LEFT: Text Content -->
      <div class="relative z-10">
        <!-- Background watermark -->
        <div
          class="absolute -top-8 -left-6 text-white font-black pointer-events-none select-none leading-none"
          style="font-size: 200px; opacity: 0.03; z-index: 0;"
        >
          SOLAR
        </div>

        <!-- Tag line -->
        <div class="relative z-10 mb-6 animate-fade-up" ref="tagEl">
          <span class="text-solar-400 text-xs font-black uppercase tracking-[0.3em] border border-solar-400 px-3 py-1.5">
            Est. 2020 &middot; Solar Installers
          </span>
        </div>

        <!-- H1 -->
        <h1 class="relative z-10 font-black text-white leading-none uppercase mb-8 animate-fade-up" ref="headingEl">
          <span class="block text-6xl sm:text-7xl lg:text-8xl">Harness</span>
          <span class="block text-6xl sm:text-7xl lg:text-8xl">The Power</span>
          <span class="block text-6xl sm:text-7xl lg:text-8xl">
            Of The <span class="text-solar-400">Sun</span>
          </span>
        </h1>

        <!-- Subtext -->
        <p class="relative z-10 text-night-400 text-lg leading-relaxed mb-10 max-w-lg animate-fade-up" ref="subEl">
          India's trusted solar installation experts. We design, supply, and install high-efficiency solar power systems for homes, businesses, and industries across Maharashtra.
        </p>

        <!-- CTAs -->
        <div class="relative z-10 flex flex-wrap gap-4 animate-fade-up" ref="ctaEl">
          <a
            href="#contact"
            class="bg-solar-400 text-night-900 font-black text-sm uppercase tracking-[0.1em] px-8 py-4 hover:bg-solar-300 transition-colors duration-200"
          >
            Get Free Quote
          </a>
          <a
            href="#projects"
            class="border-2 border-white text-white font-black text-sm uppercase tracking-[0.1em] px-8 py-4 hover:bg-white hover:text-night-900 transition-colors duration-200"
          >
            View Work &rarr;
          </a>
        </div>
      </div>

      <!-- RIGHT: Solar Panel SVG Graphic -->
      <div class="flex items-center justify-center animate-fade-up" ref="svgEl">
        <div class="relative w-full max-w-lg">
          <!-- Decorative glow ring -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-80 h-80 rounded-full border border-solar-400 opacity-10"></div>
            <div class="absolute w-96 h-96 rounded-full border border-solar-400 opacity-5"></div>
          </div>

          <svg
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full h-auto"
            aria-label="Solar panel graphic"
          >
            <!-- Background dark plate -->
            <rect x="40" y="60" width="400" height="320" fill="#1E293B" stroke="#FACC15" stroke-width="2" />

            <!-- Solar panel grid - 4 columns x 3 rows of cells -->
            <!-- Row 1 -->
            <rect x="52" y="72" width="88" height="90" fill="#0F172A" stroke="#334155" stroke-width="1" />
            <rect x="148" y="72" width="88" height="90" fill="#0F172A" stroke="#334155" stroke-width="1" />
            <rect x="244" y="72" width="88" height="90" fill="#0F172A" stroke="#334155" stroke-width="1" />
            <rect x="340" y="72" width="88" height="90" fill="#0F172A" stroke="#334155" stroke-width="1" />

            <!-- Row 2 -->
            <rect x="52" y="170" width="88" height="90" fill="#0F172A" stroke="#334155" stroke-width="1" />
            <rect x="148" y="170" width="88" height="90" fill="#0F172A" stroke="#334155" stroke-width="1" />
            <rect x="244" y="170" width="88" height="90" fill="#0F172A" stroke="#334155" stroke-width="1" />
            <rect x="340" y="170" width="88" height="90" fill="#0F172A" stroke="#334155" stroke-width="1" />

            <!-- Row 3 -->
            <rect x="52" y="268" width="88" height="90" fill="#0F172A" stroke="#334155" stroke-width="1" />
            <rect x="148" y="268" width="88" height="90" fill="#0F172A" stroke="#334155" stroke-width="1" />
            <rect x="244" y="268" width="88" height="90" fill="#0F172A" stroke="#334155" stroke-width="1" />
            <rect x="340" y="268" width="88" height="90" fill="#0F172A" stroke="#334155" stroke-width="1" />

            <!-- Cell internal grid lines - Row 1 cells -->
            <line x1="52" y1="99" x2="140" y2="99" stroke="#1E293B" stroke-width="1" />
            <line x1="52" y1="126" x2="140" y2="126" stroke="#1E293B" stroke-width="1" />
            <line x1="79" y1="72" x2="79" y2="162" stroke="#1E293B" stroke-width="1" />
            <line x1="106" y1="72" x2="106" y2="162" stroke="#1E293B" stroke-width="1" />

            <line x1="148" y1="99" x2="236" y2="99" stroke="#1E293B" stroke-width="1" />
            <line x1="148" y1="126" x2="236" y2="126" stroke="#1E293B" stroke-width="1" />
            <line x1="175" y1="72" x2="175" y2="162" stroke="#1E293B" stroke-width="1" />
            <line x1="202" y1="72" x2="202" y2="162" stroke="#1E293B" stroke-width="1" />

            <line x1="244" y1="99" x2="332" y2="99" stroke="#1E293B" stroke-width="1" />
            <line x1="244" y1="126" x2="332" y2="126" stroke="#1E293B" stroke-width="1" />
            <line x1="271" y1="72" x2="271" y2="162" stroke="#1E293B" stroke-width="1" />
            <line x1="298" y1="72" x2="298" y2="162" stroke="#1E293B" stroke-width="1" />

            <line x1="340" y1="99" x2="428" y2="99" stroke="#1E293B" stroke-width="1" />
            <line x1="340" y1="126" x2="428" y2="126" stroke="#1E293B" stroke-width="1" />
            <line x1="367" y1="72" x2="367" y2="162" stroke="#1E293B" stroke-width="1" />
            <line x1="394" y1="72" x2="394" y2="162" stroke="#1E293B" stroke-width="1" />

            <!-- Cell internal grid lines - Row 2 cells -->
            <line x1="52" y1="197" x2="140" y2="197" stroke="#1E293B" stroke-width="1" />
            <line x1="52" y1="224" x2="140" y2="224" stroke="#1E293B" stroke-width="1" />
            <line x1="79" y1="170" x2="79" y2="260" stroke="#1E293B" stroke-width="1" />
            <line x1="106" y1="170" x2="106" y2="260" stroke="#1E293B" stroke-width="1" />

            <line x1="148" y1="197" x2="236" y2="197" stroke="#1E293B" stroke-width="1" />
            <line x1="148" y1="224" x2="236" y2="224" stroke="#1E293B" stroke-width="1" />
            <line x1="175" y1="170" x2="175" y2="260" stroke="#1E293B" stroke-width="1" />
            <line x1="202" y1="170" x2="202" y2="260" stroke="#1E293B" stroke-width="1" />

            <line x1="244" y1="197" x2="332" y2="197" stroke="#1E293B" stroke-width="1" />
            <line x1="244" y1="224" x2="332" y2="224" stroke="#1E293B" stroke-width="1" />
            <line x1="271" y1="170" x2="271" y2="260" stroke="#1E293B" stroke-width="1" />
            <line x1="298" y1="170" x2="298" y2="260" stroke="#1E293B" stroke-width="1" />

            <line x1="340" y1="197" x2="428" y2="197" stroke="#1E293B" stroke-width="1" />
            <line x1="340" y1="224" x2="428" y2="224" stroke="#1E293B" stroke-width="1" />
            <line x1="367" y1="170" x2="367" y2="260" stroke="#1E293B" stroke-width="1" />
            <line x1="394" y1="170" x2="394" y2="260" stroke="#1E293B" stroke-width="1" />

            <!-- Cell internal grid lines - Row 3 cells -->
            <line x1="52" y1="295" x2="140" y2="295" stroke="#1E293B" stroke-width="1" />
            <line x1="52" y1="322" x2="140" y2="322" stroke="#1E293B" stroke-width="1" />
            <line x1="79" y1="268" x2="79" y2="358" stroke="#1E293B" stroke-width="1" />
            <line x1="106" y1="268" x2="106" y2="358" stroke="#1E293B" stroke-width="1" />

            <line x1="148" y1="295" x2="236" y2="295" stroke="#1E293B" stroke-width="1" />
            <line x1="148" y1="322" x2="236" y2="322" stroke="#1E293B" stroke-width="1" />
            <line x1="175" y1="268" x2="175" y2="358" stroke="#1E293B" stroke-width="1" />
            <line x1="202" y1="268" x2="202" y2="358" stroke="#1E293B" stroke-width="1" />

            <line x1="244" y1="295" x2="332" y2="295" stroke="#1E293B" stroke-width="1" />
            <line x1="244" y1="322" x2="332" y2="322" stroke="#1E293B" stroke-width="1" />
            <line x1="271" y1="268" x2="271" y2="358" stroke="#1E293B" stroke-width="1" />
            <line x1="298" y1="268" x2="298" y2="358" stroke="#1E293B" stroke-width="1" />

            <line x1="340" y1="295" x2="428" y2="295" stroke="#1E293B" stroke-width="1" />
            <line x1="340" y1="322" x2="428" y2="322" stroke="#1E293B" stroke-width="1" />
            <line x1="367" y1="268" x2="367" y2="358" stroke="#1E293B" stroke-width="1" />
            <line x1="394" y1="268" x2="394" y2="358" stroke="#1E293B" stroke-width="1" />

            <!-- Solar-400 accent diagonal glare on cells -->
            <line x1="52" y1="72" x2="140" y2="162" stroke="#FACC15" stroke-width="0.5" opacity="0.3" />
            <line x1="148" y1="72" x2="236" y2="162" stroke="#FACC15" stroke-width="0.5" opacity="0.3" />
            <line x1="244" y1="72" x2="332" y2="162" stroke="#FACC15" stroke-width="0.5" opacity="0.3" />
            <line x1="340" y1="72" x2="428" y2="162" stroke="#FACC15" stroke-width="0.5" opacity="0.3" />

            <line x1="52" y1="170" x2="140" y2="260" stroke="#FACC15" stroke-width="0.5" opacity="0.3" />
            <line x1="148" y1="170" x2="236" y2="260" stroke="#FACC15" stroke-width="0.5" opacity="0.3" />
            <line x1="244" y1="170" x2="332" y2="260" stroke="#FACC15" stroke-width="0.5" opacity="0.3" />
            <line x1="340" y1="170" x2="428" y2="260" stroke="#FACC15" stroke-width="0.5" opacity="0.3" />

            <line x1="52" y1="268" x2="140" y2="358" stroke="#FACC15" stroke-width="0.5" opacity="0.3" />
            <line x1="148" y1="268" x2="236" y2="358" stroke="#FACC15" stroke-width="0.5" opacity="0.3" />
            <line x1="244" y1="268" x2="332" y2="358" stroke="#FACC15" stroke-width="0.5" opacity="0.3" />
            <line x1="340" y1="268" x2="428" y2="358" stroke="#FACC15" stroke-width="0.5" opacity="0.3" />

            <!-- Mounting frame bottom bar -->
            <rect x="160" y="380" width="160" height="12" fill="#334155" />
            <rect x="220" y="392" width="40" height="8" fill="#334155" />
            <rect x="100" y="400" width="280" height="8" fill="#475569" />

            <!-- Energy circuit lines emanating from panel -->
            <!-- Top energy burst -->
            <line x1="240" y1="60" x2="240" y2="20" stroke="#FACC15" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6" />
            <line x1="240" y1="20" x2="210" y2="8" stroke="#FACC15" stroke-width="1.5" opacity="0.5" />
            <line x1="240" y1="20" x2="270" y2="8" stroke="#FACC15" stroke-width="1.5" opacity="0.5" />

            <!-- Right energy lines -->
            <line x1="440" y1="160" x2="470" y2="140" stroke="#FACC15" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6" />
            <line x1="440" y1="220" x2="475" y2="220" stroke="#FACC15" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4" />
            <line x1="440" y1="280" x2="465" y2="300" stroke="#FACC15" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5" />

            <!-- Left energy lines -->
            <line x1="40" y1="160" x2="10" y2="140" stroke="#FACC15" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5" />
            <line x1="40" y1="220" x2="5" y2="220" stroke="#FACC15" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.3" />
            <line x1="40" y1="280" x2="15" y2="300" stroke="#FACC15" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4" />

            <!-- Corner accent markers -->
            <rect x="32" y="52" width="16" height="16" fill="none" stroke="#FACC15" stroke-width="2" />
            <rect x="432" y="52" width="16" height="16" fill="none" stroke="#FACC15" stroke-width="2" />
            <rect x="32" y="372" width="16" height="16" fill="none" stroke="#FACC15" stroke-width="2" />
            <rect x="432" y="372" width="16" height="16" fill="none" stroke="#FACC15" stroke-width="2" />

            <!-- Solar-400 bold border accent -->
            <rect x="40" y="60" width="400" height="4" fill="#FACC15" />

            <!-- kW label -->
            <text x="240" y="445" text-anchor="middle" fill="#FACC15" font-family="Inter, sans-serif" font-size="13" font-weight="900" letter-spacing="4" opacity="0.9">500+ kW INSTALLED</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- Stats bar -->
    <div class="w-full bg-solar-400 mt-auto">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 text-center">
        <div class="sm:border-r sm:border-solar-500">
          <div class="text-4xl font-black text-night-900 leading-none">50+</div>
          <div class="text-night-700 text-xs font-bold uppercase tracking-[0.2em] mt-1">Projects Completed</div>
        </div>
        <div class="sm:border-r sm:border-solar-500">
          <div class="text-4xl font-black text-night-900 leading-none">500+</div>
          <div class="text-night-700 text-xs font-bold uppercase tracking-[0.2em] mt-1">Kilowatts Installed</div>
        </div>
        <div>
          <div class="text-4xl font-black text-night-900 leading-none">100%</div>
          <div class="text-night-700 text-xs font-bold uppercase tracking-[0.2em] mt-1">Customer Satisfaction</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const tagEl = ref(null)
const headingEl = ref(null)
const subEl = ref(null)
const ctaEl = ref(null)
const svgEl = ref(null)

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

  const els = [tagEl.value, headingEl.value, subEl.value, ctaEl.value, svgEl.value]
  els.forEach((el, i) => {
    if (el) {
      el.style.transitionDelay = `${i * 0.12}s`
      observer.observe(el)
    }
  })
})
</script>
