<template>
  <div class="cafe-web">
    <Header/>
    <nuxt />
    <Footer/>
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
  display: flex;
  flex-direction: column;
}
</style>
