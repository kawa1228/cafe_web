<template>
  <div class="home">
    <div class="home__top">
      <CreeksLogo class="home__top__logo"/>
      <div class="home__top__lang">
        <nuxt-link to="/">JP</nuxt-link>
        <nuxt-link :class="selectedStyle" to="/">EN</nuxt-link>
      </div>
    </div>
    <nav class="home__menu">
      <nuxt-link class="home__menu__tab" to="/">ABOUT</nuxt-link>
      <nuxt-link class="home__menu__tab" to="/">MENU</nuxt-link>
      <nuxt-link class="home__menu__tab" to="/">PHOTO</nuxt-link>
    </nav>
    <article class="home__contents">
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcreekscafe&tabs=timeline&width=184&height=275&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId" width="184" height="275" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      <section class="home__contents__about">
        <img class="home__contents__about__img" src="/img/CafeAppearance.jpg" alt="カフェ外観">
        <p class="home__contents__about__text">掛川城や図書館の近く、街中なのに木々に囲まれ、</p>
        <p class="home__contents__about__text">森の中にいるような雰囲気のカフェです。</p>
      </section>
    </article>
  </div>
</template>

<script>
import CreeksLogo from '~/assets/svg/CreeksLogo.svg'

export default {
  components: {
    CreeksLogo,
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
