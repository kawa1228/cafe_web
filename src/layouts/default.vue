<template>
  <div class="cafe-web">
    <Header/>
    <nuxt />
    <Footer class="cafe-web__footer"/>
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
.cafe-web {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__footer {
    margin-top: auto;
  }
}
</style>
