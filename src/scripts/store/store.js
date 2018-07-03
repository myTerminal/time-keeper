import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
    activeScreen: 'countdown-timer',
    countdownTimer: {
        timeout: 0,
        isRunning: false,
        hasTimedOut: false
    },
    counter: {
        count: 0
    }
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});