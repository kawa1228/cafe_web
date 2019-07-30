<template>
  <header class="header">
    <div class="header__top">
      <h1 class="header__top__title">
        <nuxt-link to="/"><CreeksLogo class="header__top__title__logo"/></nuxt-link>
      </h1>
      <div class="header__top__lang">
        <nuxt-link to="/">JP</nuxt-link>
        <nuxt-link :class="selectedStyle" to="/">EN</nuxt-link>
      </div>
    </div>
    <Navigation/>
  </header>
</template>

<script>
import CreeksLogo from '~/assets/svg/CreeksLogo.svg'
import Navigation from '~/components/Navigation'

export default {
  components: {
    CreeksLogo,
    Navigation
  },
  computed: {
    selectedStyle() {
      return 'header__top__lang--selected'
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
