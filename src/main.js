// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue)

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Vuex)
Vue.use(Buefy)

Vue.config.productionTip = false

// Use store for sharing data between components, available via this.$store
const store = new Vuex.Store({
  state: {
    status: '',
    message: '',
    response: {}
  },
  mutations: {
    update(state, updatedData) {
      state.status = updatedData.status
      state.message = updatedData.message
      state.response = updatedData.response
    }
  }
})

// Setting up Axios on Vue Instance, for use via this.$axios
Vue.prototype.$axios = axios.create({
  baseURL: 'http://localhost:6040/',
  headers: {
    'Content-Type': 'application/json'
    // Authorization: 'Bearer {token}'
  }
})
// Default vars set up from localStorage (ie, user has come back)
// Vue.prototype.$axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('id_token')}`;
// Vue.prototype.$axios.defaults.headers.common['Access-Token'] = localStorage.getItem('auth_token');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  template: '<App/>',
  components: { App }
})
