<template>
  <div class="Top">
    <h2>エピソード</h2>
    <ul>
      <li v-for="({uid, link, title}, key) in episodeList" :key="key">
        <router-link :to="link" v-text="`${uid}: ${title}`" />
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
