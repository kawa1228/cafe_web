<template>
  <header class="header">
    <nuxt-link to="/">
      <CreeksLogo class="header__logo"/>
    </nuxt-link>
    <div class="header__lang">
      <nuxt-link to="/">JP</nuxt-link>
      <nuxt-link :class="selectedStyle" to="/">EN</nuxt-link>
    </div>
  </header>
</template>

<script>
import CreeksLogo from '~/assets/svg/CreeksLogo.svg'

export default {
  components: {
    CreeksLogo
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
