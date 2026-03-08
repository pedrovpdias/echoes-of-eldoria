<script setup lang="ts">
  import { ref, onMounted } from "vue"

  const hero = ref<HTMLElement | null>(null)

  onMounted(() => {

    const blob = document.getElementById("blob")

    hero.value?.addEventListener("mousemove", (e: MouseEvent) => {

      const rect = hero.value!.getBoundingClientRect()

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const r = 110

      const path = `
        M ${x-r} ${y}
        C ${x-r} ${y-r}, ${x+r} ${y-r}, ${x+r} ${y}
        C ${x+r} ${y+r}, ${x-r} ${y+r}, ${x-r} ${y}
        Z
      `

      blob?.setAttribute("d", path)

    })

  })
</script>

<template>
  <section ref="hero" class="bg-black h-[80vh] overflow-hidden relative">

    <svg class="absolute inset-0 w-full h-full pointer-events-none">
      <defs>

        <filter id="liquid">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="130"
          />
        </filter>

        <mask id="spotlight-mask">
          <rect width="100%" height="100%" fill="black" />

          <path
            id="blob"
            fill="white"
            filter="url(#liquid)"
            d="M0 0"
          />
        </mask>

      </defs>
    </svg>

    <div id="hero-overlay"></div>

    <div class="relative inset-0 z-10 text-center text-white">
      <h1>Echoes of Eldoria</h1>
    </div>

  </section>
</template>

<style scoped>
  #hero-overlay{
    position:absolute;
    inset:0;

    background: url('../../images/backgrounds/the-dragon-s-wrath.png') center/cover;

    mask: url(#spotlight-mask);
    -webkit-mask: url(#spotlight-mask);
  }
</style>

<script lang="ts">
  export default {
    name: 'Home'
  }
</script>