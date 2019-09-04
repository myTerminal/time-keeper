/* global module */

import Vue from 'vue';

import './pwa';

import App from './components/App/App.vue';
import store from './store/store';

import '../styles/styles.less';

export default new Vue({
    el: '#app',
    store,
    render: c => c(App)
});

if (module.hot) {
    module.hot.accept();
}
