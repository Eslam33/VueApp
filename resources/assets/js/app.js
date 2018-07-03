
require('./bootstrap');


//
// window.Vue = require('vue');
// window.VueAxios=require('vue-axios').default;
// window.Axios=require('axios').default;
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

// notifications after adding
import Toaster from 'v-toaster';
import 'v-toaster/dist/v-toaster.css';
Vue.use(Toaster, {timeout: 5000});


//Vue.component('example-component', require('./components/ExampleComponent.vue'));

const Genius = Vue.component('Genius', require('./components/Genius.vue'));
//
// const App = Vue.component('App', require('./components/App.vue'));
//
// const Suggest = Vue.component('Suggest', require('./components/Suggest.vue'));
// const Post = Vue.component('Post', require('./components/Post.vue'));
//
// const EditPost = Vue.component('EditPost', require('./components/EditPost.vue'));
// const DeletePost = Vue.component('DeletePost', require('./components/DeletePost.vue'));
//



// registering Modules
Vue.use(VueAxios, axios );

const app = new Vue({
    el: '#app',


});
