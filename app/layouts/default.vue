<script setup lang="ts">
// Global chrome: header, page slot, floating LINE CTA, fixed bottom nav.
// Bottom padding leaves room for the fixed bottom navigation bar (design-spec §2.2).
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />

    <main class="flex-1 pb-10 md:pb-16">
      <slot />
    </main>

    <!-- Footer sits outside main, so it needs its own clearance for the fixed
         BottomNav — otherwise the copyright row hides behind it at page end. -->
    <div class="pb-20 md:pb-0">
      <AppFooter />
    </div>

    <!-- Single global conversion target (design-spec §3). -->
    <LineCta />

    <!-- Mobile-first fixed bottom navigation. -->
    <BottomNav />
  </div>
</template>
