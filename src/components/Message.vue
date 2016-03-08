<template>
  <div class="row" :class="odd ? 'odd' : ''">
    <div class="col-xs-2 username" :class="user.name == me ? 'me' : ''">{{ user.name }}</div>
    <div class="col-xs-10">{{ body }}</div>
  </div>
  <!-- <pre>{{ message | json 4 }}</pre> -->
</template>

<script>
export default {
  data () {},
  computed: {
    user () {
      return this.message.payload.user;
    },
    body () {
      return this.message.payload.message;
    }
  },
  vuex: {
    getters: {
      me: state => state.user
    }
  },
  props: ['message', 'odd']
}
</script>

<style scoped>
  .odd {
    background-color: #f7f7f9;
  }
  .username {
    text-align: right;
    font-weight: bold;
  }
  .username.me {
    font-style: italic;
  }
</style>