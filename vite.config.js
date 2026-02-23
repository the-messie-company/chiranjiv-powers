import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// For GitHub Pages: set base to /<repo-name>/
// Update 'chiranjivpowers' to match your actual GitHub repo name if different.
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  plugins: [vue()],
  base: isGitHubPages ? '/chiranjivpowers/' : '/',
})
