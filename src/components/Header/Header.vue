<script setup lang="ts">
import styles from './header.module.scss';
</script>

<template>
  <header :class="styles.header">
    <div :class="styles.header__logo">
      <img :class="styles.header__logoIcon"
           src="@/assets/img/png/logo-icon.png"
      />

      <img :class="styles.header__logoText"
           src="@/assets/img/png/logo-text.png"
      />
    </div>
  </header>
</template>