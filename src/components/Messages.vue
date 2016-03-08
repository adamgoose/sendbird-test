<template>

  <div class="container-fluid">
    <message v-for="message in messages" :message="message" :odd="$index % 2 != 0"></message>
  </div>

  <hr>

  <form @submit.prevent="send">
    <div class="input-group">
      <input type="text" v-model="newMessage" class="form-control">
      <span class="input-group-btn">
        <button type="submit" class="btn btn-primary">Send!</button>
      </span>
    </div>
  </form>
          
</template>

<script>
import SendBird from './../services/SendBird.js'
import Message from './Message.vue'

export default {
  data () {
    return {
      newMessage: ''
    }
  },
  ready () {
    SendBird.on('MessageReceived', (message) => {
      this.$store.dispatch('PUSH_MESSAGE', {
        cmd: 'MESG',
        payload: message
      });
    })
  },
  methods: {
    send: function() {
      SendBird.send(this.newMessage);
      this.newMessage = '';
    }
  },
  vuex: {
    getters: {
      channel: state => state.channel,
      messages: state => state.messages
    }
  },
  components: { Message }
}
</script>
