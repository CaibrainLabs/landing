<script setup lang="ts">
import styles from './footer.module.scss';
import LogoGithub from '@/assets/img/svg/logo-github.svg';
</script>

<template>
  <footer :class="styles.footer">
    <div :class="styles.footer__leftSide">
      <ul :class="styles.footer__socialLinks">
        <li>
          <a href="https://github.com/CaibrainLabs">
            <LogoGithub />
          </a>
        </li>
      </ul>
    </div>

    <div :class="styles.footer__rightSide">
      <div :class="styles.footer__email">
        Reach out to: <a href="mailto:contact@caibrainlabs.com">contact@caibrainlabs.com</a>
      </div>
    </div>
  </footer>
</template>