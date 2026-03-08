<script setup lang="ts">
  import { onMounted } from 'vue'

  onMounted(() => {
    const hero = document.querySelector(".hero")
    const overlay = document.querySelector(".overlay")

    if (hero && overlay) {
      hero.addEventListener("mousemove", (e) => {
        const rect = hero.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        overlay.style.setProperty("--x", x + "px")
        overlay.style.setProperty("--y", y + "px")

      })
    }
  })
</script>

<template>
  <section class="hero">
    <div class="overlay"></div>

    <div class="content">
      <h1>Efeito Spotlight</h1>
      <p>Passe o mouse pela tela</p>
    </div>
  </section>
</template>

<style scoped>
  .hero {
    position: relative;
    height: 100vh;
    overflow: hidden;

    background: #111;
    color: white;
  }

  .content{
    position: relative;
    z-index: 2;
    text-align: center;
    margin-top: 40vh;
  }

  .overlay{
    position:absolute;
    inset:0;

    background: url('../../images/backgrounds/the-dragon-s-wrath.png') center/cover;

    --x: 50%;
    --y: 50%;

    mask-image: radial-gradient(
      circle 150px at var(--x) var(--y),
      black 0%,
      transparent 100%
    );

    -webkit-mask-image: radial-gradient(
      circle 150px at var(--x) var(--y),
      black 0%,
      transparent 100%
    );
  }
</style>

<script lang="ts">
  export default {
    name: 'Home'
  }
</script>