<script setup lang="ts">
import { RouterView } from 'vue-router';
import styles from './app.module.scss';
import Footer from '@/components/Footer/Footer.vue';
import Header from '@/components/Header/Header.vue'
</script>

<template>
  <div :class="styles.appContainer">
    <div :class="styles.appContainer__bg">
      <video :class="styles.appContainer__bgHigh" muted loop autoplay>
        <source src='@/assets/video/bg-video.webm' type="video/webm"/>
        <source src='@/assets/video/bg-video.mp4' type="video/mp4"/>
      </video>
      
      <img :class="styles.appContainer__bgLow" src="@/assets/img/jpg/bg-low.jpg">
    </div>

    <div :class="styles.appContainer__content">
      <Header />

      <RouterView />

      <Footer />
    </div>
  </div>
</template>