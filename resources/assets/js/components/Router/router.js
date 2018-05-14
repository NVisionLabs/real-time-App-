import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router';
 
Vue.use(Vuetify)

const routes = [
    { path: '/login', component: Login}
]

const router = new VueRouter({
    routes
})


export default router  