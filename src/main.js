import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuerouter from 'vue-router'
import AddStudent from './components/AddStudent'
import ShowData from './components/ShowData'
import FullDetails from './components/FullDetails'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.use(VueMaterial)
Vue.use(Vuerouter)
Vue.use(Vuelidate)
const routes = [
   {path: '/show-data',component : ShowData},
   {path: '/',component: AddStudent},
  {path: '/full-details/:id',component: FullDetails},
  {path: '/edit-data/:id',component: AddStudent}
]
const router = new Vuerouter({routes,
mode: 'history'})
Vue.config.productionTip = false

new Vue({
  el: '#app',router,
  render: h => h(App),
});
