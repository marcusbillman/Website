<template>
  <div class="page">
    <TheHeader title="Portfolio" />
    <div class="sections">
      <WorkSection />
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
import ContactSection from '@/components/ContactSection.vue'
import TheHeader from '@/components/TheHeader.vue'
import WorkSection from '@/components/WorkSection.vue'
</script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;
</style>
