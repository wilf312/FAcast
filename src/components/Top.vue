<template>
  <div class="Top">
    <h2>エピソード</h2>
    <ul>
      <li v-for="({link, title}, key) in episodeList" :key="key">
        <router-link :to="link" v-text="title" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Top',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'episodeList'
    ])
  }
}
</script>

<style scoped>
</style>
