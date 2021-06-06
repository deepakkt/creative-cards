import Vue from 'vue'
import App from './App.vue'

export const EventBus = new Vue(

);

var app = new Vue({
  el: '#app',
  render: h => h(App)
})
