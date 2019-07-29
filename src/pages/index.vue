<template>
  <div class="container">
      <CreeksLogo />
      <nuxt-link to="/">ABOUT</nuxt-link>
      <nuxt-link to="/">MENU</nuxt-link>
      <nuxt-link to="/">PHOTO</nuxt-link>
      <img src="/img/CafeAppearance.jpg" alt="">
      <div>
        <p>掛川城や図書館の近く、街中なのに木々に囲まれ、</p>
        <p>森の中にいるような雰囲気のカフェです</p>
      </div>
  </div>
</template>

<script>
import CreeksLogo from '~/assets/svg/CreeksLogo.svg'

export default {
  components: {
    CreeksLogo
  }
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
