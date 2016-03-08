import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: null,
  channel: null,
  messages: []
}

const mutations = {
  SET_USER (state, user) {
    state.user = user
  },
  SET_CHANNEL (state, channel) {
    state.channel = channel
  },
  SET_MESSAGES (state, messages) {
    state.messages = messages
  },
  PUSH_MESSAGE (state, message) {
    state.messages.push(message)
  }
}

export default new Vuex.Store({
  state,
  mutations
})