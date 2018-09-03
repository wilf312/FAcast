import Vue from 'vue'
import Vuex from 'vuex'
import episode from '@/assets/episode.yml'
import config from '@/assets/config.yml'

Vue.use(Vuex)

const store = {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    episodeList: [
      ...episode.episodeList
    ],
    config
  },
  getters: {
    episodeList(state) {
      return state.episodeList.map(d => ({
        ...d,
        link: `/${d.uid}`
      }))
    },
    config(state) {
      return {
        ...state.config,
        hashtagSharp: `#${state.config.hashtag}`
      }
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
