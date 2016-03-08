<template>
  <div id="app">

    <div v-if="isLoggedIn">
      
      <div class="row">
        <div class="col-xs-3">
          <nav class="navbar navbar-full navbar-light bg-faded">
            <a class="navbar-brand" @click.prevent>{{ user }}</a>
          </nav>

          <hr>

          <channels></channels>

        </div>
        <div class="col-xs-9">
          <nav class="navbar navbar-full navbar-light bg-faded">
            <a class="navbar-brand" @click.prevent>
              <span v-show="channel">#{{ channel.name }}</span>
              <span v-show="!channel">Select a channel!</span>
            </a>
          </nav>

          <hr>

          <messages v-if="channel"></messages>
        </div>
      </div>

    </div>
    <auth v-else></auth>
    
  </div>
</template>

<script>
import Auth from './components/Auth.vue'
import Channels from './components/Channels.vue'
import Messages from './components/Messages.vue'

export default {
  data () {},
  computed: {
    isLoggedIn () {
      return this.user !== null
    }
  },
  vuex: {
    getters: {
      user: state => state.user,
      channel: state => state.channel
    }
  },
  components: { Auth, Channels, Messages }
}
</script>
