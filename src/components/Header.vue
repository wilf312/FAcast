<template>
  <div class="Header">
    <div class="HeaderInner">
      <div class="HeaderLink">
        <h1>
          <router-link :to="{name: 'Top'}"><img src="/static/logo.svg" alt="FAcast" /></router-link>
        </h1>
        <transition
          name="fade"
          mode="out-in"
        >
          <p v-if="!isTopPage"><router-link :to="{name: 'Top'}" v-text="'< 一覧へ戻る'" /></p>
        </transition>
      </div>
      <div class="rss">
        <div class="rssButton">
          <a :href="config.rss">RSSを購読</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Header',
  computed: {
    isTopPage () {
      return this.$route.name === 'Top'
    },
    ...mapGetters([
      'config'
    ])
  }
}
</script>

<style scoped lang="stylus">
.Header
  box-sizing border-box
  padding 0 0 0 10px
  margin-bottom 1.5rem
  border-bottom 1px solid #f5f5f5
  background #fafafa

.HeaderInner
  display flex
  align-items center
  justify-content space-between
  max-width 800px
  margin 0 auto
  box-sizing border-box
  padding 0 1rem

.HeaderLink
  display flex
  align-items baseline

h1, p
  margin-bottom 0

h1 a
  color black
  text-decoration none

h1 img
  width 90px
  height auto

p
  margin-left 1rem
  font-size 1rem

.rss
  padding 10px

.rssButton
  padding 1px 10px
  border solid 1px #555555
  border-radius 10px
  transition background 0.3s
  cursor pointer
  a
    color #333333
    text-decoration none
    &:hover
      background #dddddd
</style>
