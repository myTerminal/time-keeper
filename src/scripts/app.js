import Vue from 'vue';

import './service-worker-starter.js';

import App from './components/App.vue';
import store from './store/store';

import '../styles/styles.less';

export default new Vue({
    el: '#app',
    store,
    render: c => c(App)
});
