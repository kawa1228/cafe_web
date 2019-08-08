<template>
  <div class="default-layout">
    <Header/>
    <nuxt class="default-layout__nuxt"/>
    <Footer class="default-layout__footer"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
$footer-height: 100px;

.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;

  &__nuxt {
    padding-bottom: $footer-height;
    margin:100px 0 88px 0;
  }

  &__footer {
    position: absolute;
    bottom: 0;
    height: $footer-height;
    width: 100%;
  }
}
</style>
