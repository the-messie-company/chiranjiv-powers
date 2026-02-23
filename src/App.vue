<template>
  <div>
    <AppNav />
    <main>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <AppFooter />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import AppNav from './components/AppNav.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import StatsSection from './components/StatsSection.vue'
import WhyUsSection from './components/WhyUsSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>
