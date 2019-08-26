<template>
  <div class="default-layout">
    <Header ref="header" :isOpenedMenu="isOpenedMenu" @open-menu="openedMenu" @close-menu="closedMenu"/>
    <transition name="menu">
      <SpMenu v-if="isOpenedMenu" @close-menu="closedMenu"/>
    </transition>
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
import SpMenu from '~/components/SpMenu'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default {
  components: {
    Header,
    SpMenu,
    Navigation,
    Footer
  },
  data() {
    return {
      isShowTitle: false,
      isOpenedMenu: false
    }
  },
  watch: {
    isOpenedMenu() {
      this.onChangeScrollLock()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.onChangeScrollLock();
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
    this.isOpenedMenu = false;
    this.onChangeScrollLock();
  },
  methods: {
    handleScroll() {
      const header = this.$refs['header'].$el
      const rect = header.getBoundingClientRect()
      this.isShowTitle = (rect.height + rect.top) <= 15
    },
    openedMenu() {
      this.isOpenedMenu = true
    },
    closedMenu() {
      this.isOpenedMenu = false
    },
    onChangeScrollLock() {
      const elem = document.querySelector('.default-layout')
      if (this.isOpenedMenu) {
        disableBodyScroll(elem)
      } else {
        clearAllBodyScrollLocks()
      }
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
