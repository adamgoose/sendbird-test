<template>
  <form @submit.prevent="login(username)">
    <div class="input-group">
      <input type="text" v-model="username" placeholder="Username" class="form-control">
      <span class="input-group-btn">
        <input type="submit" class="btn btn-primary">Login</button>
      </span>
    </div>
  </form>
</template>

<script>
import SendBird from './../services/SendBird.js'

export default {
  data () {
    return {
      username: ''
    }
  },
  vuex: {
    actions: {
      login: ({dispatch}, username) => {
        SendBird.login(username, (user) => {
          dispatch('SET_USER', username)
        });
      }
    }
  }
}
</script>
