<template>

  <div class="list-group">
    <button v-for="chan in channels"
      type="button"
      class="list-group-item"
      :class="isActive(chan) ? 'list-group-item-info' : ''"
      @click="selectChannel(chan)"
    >#{{ chan.name }}</button>
  </div>

  <hr>

  <div class="input-group">
    <span class="input-group-addon">#</span>
    <input type="text" v-model="newChannel" placeholder="Create a Channel" class="form-control">
    <span class="input-group-btn">
      <button class="btn btn-primary">Go!</button>
    </span>
  </div>
          
</template>

<script>
import SendBird from './../services/SendBird.js'

export default {
  data () {
    return {
      channels: [],
      newChannel: ''
    }
  },
  ready () {
    SendBird.getChannels((data) => {
      this.channels = data.channels;
    })
  },
  methods: {
    isActive: function(channel) {
      if(! this.channel) {
        return false
      }

      return channel.channel_url == this.channel.channel_url
    }
  },
  vuex: {
    getters: {
      channel: state => state.channel
    },
    actions: {
      selectChannel: ({dispatch}, channel) => {
        SendBird.join(channel, () => {
          SendBird.load((messages) => {
            dispatch('SET_MESSAGES', messages.reverse())
          })
        })

        dispatch('SET_CHANNEL', channel)
      }
    }
  }
}
</script>
