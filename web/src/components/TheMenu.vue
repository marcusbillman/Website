<template>
  <div class="menu" :class="{ 'menu--open': $store.state.menuOpen }">
    <router-link class="menu__name" to="/">Marcus Billman</router-link>
    <div class="menu__body">
      <div class="menu__socials">
        <h3>Socials</h3>
        <a
          href="https://www.linkedin.com/in/marcusbillman"
          class="menu__social-link"
          target="_blank"
          rel="noopener noreferrer"
          >LinkedIn</a
        >
        <a
          href="https://dribbble.com/marcusbillman"
          class="menu__social-link"
          target="_blank"
          rel="noopener noreferrer"
          >Dribbble</a
        >
        <a
          href="https://github.com/marcusbillman"
          class="menu__social-link"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub</a
        >
        <a
          href="https://soundcloud.com/xfoxx37"
          class="menu__social-link"
          target="_blank"
          rel="noopener noreferrer"
          >SoundCloud</a
        >
        <a
          href="mailto:hello@marcusbillman.com"
          class="menu__social-link"
          target="_blank"
          rel="noopener noreferrer"
          >Email</a
        >
      </div>
      <div class="menu__links">
        <h3>Menu</h3>
        <router-link class="menu__link" to="/">Home</router-link>
        <router-link class="menu__link" to="/portfolio">Portfolio</router-link>
        <router-link class="menu__link" to="/about">About</router-link>
        <router-link class="menu__link" to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
  <div
    class="dim-overlay"
    :class="{ 'dim-overlay--open': $store.state.menuOpen }"
    @click="$store.commit('setMenuOpen', false)"
  ></div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.menu {
  position: fixed;
  width: calc(100% - 3.2rem);
  right: 1.6rem;
  bottom: 8.8rem;
  display: grid;
  gap: 3.2rem;
  background: $white;
  border: 2px solid $grey-200;
  border-radius: 1.6rem;
  padding: 2.4rem;
  overflow-y: auto;
  transform: translateX(calc(100% + 3.2rem));
  z-index: 101;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  &--open {
    transform: none;
  }
  a {
    display: block;
    text-decoration: none;
  }
  h3 {
    display: none;
    font-weight: 600;
    color: $grey-600;
    margin-bottom: 4.8rem;
  }
  &__socials {
    display: none;
  }
  &__social-link {
    margin-bottom: 0.8rem;
  }
  &__link {
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
  }
  .router-link-exact-active:not(&__name) {
    font-weight: 700;
    color: $blueberry-500;
  }
  &__name {
    font-weight: 600;
  }
  @include for-tablet-landscape-up {
    max-width: 60rem;
    max-height: calc(100vh - 12rem);
    top: 9.6rem;
    right: 3.2rem;
    bottom: unset;
    padding: 6.4rem;
    h3 {
      display: block;
    }
    &__body {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 10rem;
      margin: 6.4rem 0;
    }
    &__socials {
      display: block;
    }
    &__link {
      font-size: 4rem;
      margin-bottom: 0.8rem;
    }
  }
}

.dim-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $white;
  opacity: 0;
  z-index: 100;
  pointer-events: none;
  transition: opacity 0.3s;
  &--open {
    opacity: 0.8;
    pointer-events: initial;
  }
}
</style>
