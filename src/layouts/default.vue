<template>
  <div class="cafe-web">
    <nuxt />
    <Footer class="cafe-web__footer"/>
  </div>
</template>

<script>
import Footer from '~/components/Footer'

export default {
  components: {
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
