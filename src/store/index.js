import Vue from 'vue'
import Vuex from 'vuex'
import episode from '@/assets/episode.yml'

Vue.use(Vuex)

const store = {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    episodeList: [
      ...episode.episodeList
    ]
  },
  getters: {
    episodeList(state) {
      return state.episodeList.map(d => ({
        ...d,
        link: `/${d.uid}`
      }))
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
