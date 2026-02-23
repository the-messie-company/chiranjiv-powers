<template>
  <component :is="currentApp" />
  <DesignSwitcher :current="currentDesign" @change="setDesign" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import DesignSwitcher from './components/DesignSwitcher.vue'

import AppOriginal from './App.vue'
import AppBold from './AppBold.vue'
import AppOrganic from './AppOrganic.vue'
import AppDark from './AppDark.vue'
import AppPlayful from './AppPlayful.vue'

const designMap = {
  original: AppOriginal,
  bold: AppBold,
  organic: AppOrganic,
  dark: AppDark,
  playful: AppPlayful,
}

function getInitialDesign() {
  const params = new URLSearchParams(window.location.search)
  const fromUrl = params.get('design')
  if (fromUrl && designMap[fromUrl]) return fromUrl
  const fromStorage = localStorage.getItem('chiranjiv-design')
  if (fromStorage && designMap[fromStorage]) return fromStorage
  return 'original'
}

const currentDesign = ref('original')

onMounted(() => {
  currentDesign.value = getInitialDesign()
})

const currentApp = computed(() => designMap[currentDesign.value])

function setDesign(id) {
  currentDesign.value = id
  localStorage.setItem('chiranjiv-design', id)
  const url = new URL(window.location.href)
  url.searchParams.set('design', id)
  window.history.pushState({}, '', url)
}
</script>
