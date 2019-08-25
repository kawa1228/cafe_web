<template>
  <header class="header">
    <nuxt-link to="/">
      <CreeksLogo class="header__logo"/>
    </nuxt-link>
    <div class="header__menu">
      <MenuIcon class="header__menu__icon"/>
      <span class="header__menu__text">Menu</span>
    </div>
    <div class="header__lang">
      <nuxt-link to="/">JP</nuxt-link>
      <nuxt-link :class="selectedStyle" to="/">EN</nuxt-link>
    </div>
  </header>
</template>

<script>
import CreeksLogo from '~/assets/svg/CreeksLogo.svg'
import MenuIcon from '~/assets/svg/MenuIcon.svg'

export default {
  components: {
    CreeksLogo,
    MenuIcon
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
