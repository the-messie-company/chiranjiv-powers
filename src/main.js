import { createApp } from 'vue'
import './assets/main.css'

// ─── Switch designs by uncommenting ONE line below ───────────────────────────
// import App from './App.vue'          // V1 · Original (clean white + amber)
// import App from './AppBold.vue'      // V2 · Bold & Industrial
// import App from './AppOrganic.vue'   // V3 · Organic & Earthy
// import App from './AppDark.vue'      // V4 · Dark & Futuristic
import App from './AppPlayful.vue'   // V5 · Playful & Illustrated
// ─────────────────────────────────────────────────────────────────────────────

createApp(App).mount('#app')
