import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    episodeList: [
      {
        uid: '001',
        description: 'ゼルダの伝説/switch、万引き少年を捕まえた話、お盆の渋滞の話をしました。',
        link: '/001',
        title: 'I\'ve never redirected in my life'
      },　
      {
        uid: '000',
        description: '自己紹介、Podcastの名前、東京医科大女性受験者の得点操作、Car detailingの話をしました。',
        link: '/000',
        title: 'Hello, FA cast'
      }
    ]
  },
  getters: {
    episodeList(state) {
      return state.episodeList
    }
  },
  mutations: {
    setOrderNumber(state, elementList) {
    }
  },
  actions: {
    changePage({ commit }, pageNum) {
      commit('changePage', pageNum)
    }
  },
  plugins: []
}

export default new Vuex.Store(store)
