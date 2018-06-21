import Vue from 'vue';

import './service-worker-starter.js';

import App from './components/App.vue';

import '../styles/styles.less';

export default new Vue({
    el: '#app',
    render: c => c(App)
});
