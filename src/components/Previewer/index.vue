<template>
  <div class="previewer">
    <no-ssr placeholder="Loading...">
      <vue-previewer v-for="(item, i) in previewItems" :images="item.images" mode="image" :options="item.options" :key="`previewer__img--key-${i}`"/>
    </no-ssr>
  </div>
</template>

<script>
export default {
  props: {
    previewItems: {
      images: {
        type: Array,
        default: null
      }
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
