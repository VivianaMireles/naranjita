
import Vue from 'vue'
import jQuery from "jquery"
global.jQuery = jQuery

import vueResource from "vue-resource";
import VuePaginator from 'vuejs-paginator';
import VueRouter from 'vue-router';
import VueCarousel from 'vue-carousel';

let Bootstrap = require('bootstrap');
var axios = require('axios');


import App from './App.vue';
import routes from "./routes"
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import './css/styles.css';

import FBSignInButton from 'vue-facebook-signin-button'


Vue.use(FBSignInButton);

Vue.use(VueCarousel);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(vueResource);


Vue.component('modal', {
  template: '#modal-template'
})

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
