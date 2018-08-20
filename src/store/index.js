import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    episodeList: [
      {
        uid: '001',
        description: '説明',
        link: '/001',
        title: 'I never redirected in my life'
      },
      {
        uid: '000',
        description: '説明',
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
