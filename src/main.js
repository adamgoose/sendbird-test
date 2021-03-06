window.Tether = require('tether')
window.jQuery = window.$ = require('jquery');
require('bootstrap')

import Vue from 'vue'
import App from './App.vue'
import store from './../vuex/store.js'

new Vue({
  el: 'body',
  store,
  components: { App }
})