<template>
  <footer class="footer">
    <div class="container footer__inner">
      <router-link class="footer__name" to="/">Marcus Billman</router-link>
      <div class="footer__links">
        <div class="footer__navigation">
          <a
            class="footer__link"
            href="https://www.linkedin.com/in/marcusbillman"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn</a
          >
          <a
            class="footer__link"
            href="https://dribbble.com/marcusbillman"
            target="_blank"
            rel="noopener noreferrer"
            >Dribbble</a
          >
          <a
            class="footer__link"
            href="https://github.com/marcusbillman"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub</a
          >
          <a
            class="footer__link"
            href="https://soundcloud.com/xfoxx37"
            target="_blank"
            rel="noopener noreferrer"
            >SoundCloud</a
          >
        </div>
        <a
          class="footer__link footer__email"
          href="mailto:hello@marcusbillman.com"
          target="_blank"
          rel="noopener noreferrer"
          >hello@marcusbillman.com</a
        >
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.footer {
  // General footer styles
  margin-top: clamp(10rem, 20vh, 20rem);
  padding-bottom: 4.8rem;
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    @include for-tablet-portrait-up {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  // Name (left on desktop)
  &__name {
    font-size: clamp(2rem, 3vw, 2.4rem);
    font-weight: 500;
    text-decoration: none;
  }

  // Links (right on desktop)
  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include for-tablet-portrait-up {
      align-items: flex-end;
    }
  }
  &__navigation {
    display: flex;
    gap: 1.6rem;
    margin-bottom: 1.6rem;
    @include for-tablet-portrait-up {
      gap: 3.2rem;
      margin-bottom: 0.8rem;
    }
  }
  &__link:not(.footer__email) {
    display: block;
    font-weight: 500;
    text-decoration: none;
  }
}
</style>
