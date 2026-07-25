<script setup lang="ts">
// Global chrome: header, page slot, floating LINE CTA, fixed bottom nav.
// Bottom padding leaves room for the fixed bottom navigation bar (design-spec §2.2).
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />

    <main class="flex-1 pb-24 md:pb-16">
      <slot />
    </main>

    <AppFooter />

    <!-- Single global conversion target (design-spec §3). -->
    <LineCta />

    <!-- Mobile-first fixed bottom navigation. -->
    <BottomNav />
  </div>
</template>
