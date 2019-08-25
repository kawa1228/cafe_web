<template>
  <div class="default-layout">
    <Header ref="header" :isOpenedMenu="isOpenedMenu" @open-menu="openedMenu" @close-menu="closedMenu"/>
    <!-- TODO: 一連の処理を含めコンポーネントにわける -->
    <div v-if="isOpenedMenu" class="default-layout__navi--sp">
      <ul class="default-layout__navi--sp__list">
        <li class="default-layout__navi--sp__list__item" v-for="(item, i) in menuList" :key="`navi--sp__list__item--${i}`">
          <nuxt-link @click.native="closedMenu" :to="item.link">{{ item.title }}</nuxt-link>
        </li>
        <div class="default-layout__navi--sp__list__access">
          <p>〒436-0079　静岡県掛川市掛川1070-12</p>
          <p>JR東海道本線「掛川駅」より徒歩10分</p>
        </div>
      </ul>
    </div>
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
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default {
  components: {
    Header,
    Navigation,
    Footer
  },
  data() {
    return {
      isShowTitle: false,
      isOpenedMenu: false,
      menuList: [
        {title: 'HOME', link: '/'},
        {title: 'ABOUT', link: '/about'},
        {title: 'MENU', link: '/menu'},
        {title: 'PHOTO', link: '/photo'}
      ]
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
