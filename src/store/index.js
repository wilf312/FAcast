import Vue from 'vue'
import Vuex from 'vuex'
import episode from '@/assets/episode.yml'
import config from '@/assets/config.yml'
import { DEVICE_TYPE, BREAK_POINT } from '@/const'

Vue.use(Vuex)

const store = {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    episodeList: [
      ...episode.episodeList
    ],
    config,
    deviceType: DEVICE_TYPE.PC
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
    checkDevice(state, deviceType) {
      return state.deviceType = deviceType
    }
  },
  actions: {
    checkDevice({ commit }) {
      commit('checkDevice', window.innerWidth > BREAK_POINT ? DEVICE_TYPE.PC : DEVICE_TYPE.SP)
    }
  },
  plugins: []
}

export default new Vuex.Store(store)
