<template>
  <div class="Content">
    <h2>{{`${currentEpisode.uid} ${currentEpisode.title}`}}</h2>
    <p>{{currentEpisode.description}}</p>
    <div>
      <audio :src="`/assets/storage/${currentEpisode.uid}.mp3`" controls />
    </div>
    <div>
      ShowNotes
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Content',
  computed: {
    ...mapGetters([
      'episodeList'
    ]),
    currentEpisode () {
      return this.episodeList.find(({uid}) => uid === this.$route.params.id)
    }
  }
}
</script>

<style scoped>
</style>
