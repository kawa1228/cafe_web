<template>
  <header class="header">
    <nuxt-link to="/">
      <CreeksLogo class="header__logo"/>
    </nuxt-link>
    <div class="header__menu">
      <div class="header__menu--close" v-if="isOpenedMenu">
        <CloseIcon @click="onClickClose" class="header__menu--close__icon"/>
        <span class="header__menu--close__text">Close</span>
      </div>
      <div v-else class="header__menu--open">
        <MenuIcon @click="onClickMenu" class="header__menu--open__icon"/>
        <span class="header__menu--open__text">Menu</span>
      </div>
    </div>
    <div class="header__lang">
      <nuxt-link to="/">JP</nuxt-link>
      <nuxt-link :class="selectedStyle" to="/">EN</nuxt-link>
    </div>
  </header>
</template>

<script>
import CreeksLogo from '~/assets/svg/CreeksLogo.svg'
import CloseIcon from '~/assets/svg/CloseIcon.svg'
import MenuIcon from '~/assets/svg/MenuIcon.svg'

export default {
  props: {
    isOpenedMenu: {
      type: Boolean,
      required: true
    }
  },
  components: {
    CreeksLogo,
    CloseIcon,
    MenuIcon
  },
  computed: {
    selectedStyle() {
      return 'header__top__lang--selected'
    }
  },
  methods: {
    onClickMenu() {
      this.$emit('open-menu')
    },
    onClickClose() {
      this.$emit('close-menu')
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
