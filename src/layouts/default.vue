<template>
  <div class="default-layout">
    <Header ref="header"/>
    <div class="default-layout__navi">
      <transition name="title-fade">
        <h1 v-if="isShowTitle" class="default-layout__navi__title">Creek's Cafe</h1>
      </transition>
      <Navigation/>
    </div>
    <nuxt class="default-layout__nuxt"/>
    <Footer class="default-layout__footer"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Navigation,
    Footer
  },
  data() {
    return {
      isShowTitle: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const header = this.$refs['header'].$el
      const rect = header.getBoundingClientRect()
      this.isShowTitle = (rect.height + rect.top) <= 15
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
