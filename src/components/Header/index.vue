<template>
  <div>
    <div class="home__top">
      <h1 class="home__top__title">
        <CreeksLogo class="home__top__title__logo"/>
      </h1>
      <div class="home__top__lang">
        <nuxt-link to="/">JP</nuxt-link>
        <nuxt-link :class="selectedStyle" to="/">EN</nuxt-link>
      </div>
    </div>
    <Navigation/>
  </div>
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
      return 'home__top__lang--selected'
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
