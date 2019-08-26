<template>
  <div class="sp-menu">
    <ul class="sp-menu__list">
      <li class="sp-menu__list__item" v-for="(item, i) in menuList" :key="`navi--sp__list__item--${i}`">
        <nuxt-link @click.native="closedMenu" :to="item.link">{{ item.title }}</nuxt-link>
      </li>
      <div class="sp-menu__list__access">
        <p>〒436-0079　静岡県掛川市掛川1070-12</p>
        <p>JR東海道本線「掛川駅」より徒歩10分</p>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {title: 'HOME', link: '/'},
        {title: 'ABOUT', link: '/about'},
        {title: 'MENU', link: '/menu'},
        {title: 'PHOTO', link: '/photo'}
      ]
    }
  },
  methods: {
    closedMenu() {
      this.$emit('close-menu')
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
