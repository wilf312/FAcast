<template>
  <div class="Header">
    <div class="HeaderInner">
      <h1>
        <router-link :to="{name: 'Top'}" v-text="'FAcast'" />
      </h1>

      <transition
        name="fade"
        mode="out-in"
      >
        <p v-if="!isTopPage"><router-link :to="{name: 'Top'}" v-text="'< 一覧へ戻る'" /></p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isTopPage () {
      return this.$route.name === 'Top'
    }
  }
}
</script>

<style scoped>
.Header {
  box-sizing: border-box;
  padding: 0 0 0 10px;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #f5f5f5;
}

.HeaderInner {
  display: flex;
  align-items: baseline;
}

h1, p {
  margin-bottom: 0;
}

h1 a {
  color: black;
  text-decoration: none;
}
p {
  margin-left: 1rem;
  font-size: 1rem;
}
</style>
