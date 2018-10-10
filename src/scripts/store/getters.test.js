/* global describe before it */

import Vue from 'vue';
import getters from './getters';

describe('getters', function () {
    var state;

    before(function () {
        state = {
            counter: {
                count: 5
            },
            countdownTimer: {
                isRunning: false,
                timeout: 62,
                hasTimedOut: false
            }
        };
    });

    it('read the correct counter value', function () {
        getters.counterCount(state).should.equal(5);
    });

    it('read the correct counter state', function () {
        getters.isCountdownTimerRunning(state).should.equal(false);
    });

    it('read the correct timer timeout', function () {
        getters.timeout(state).should.equal(62);
    });

    // TODO: Move the below getters to computed

    // it('read the correct timer timeout seconds', function () {
    //     getters.timeoutSeconds(state, getters).should.equal(2);
    // });

    // it('read the correct timer timeout minutes', function () {
    //     getters.timeoutMinutes(state, getters).should.equal(1);
    // });

    // it('read the correct timer timeout hours', function () {
    //     getters.timeoutHours(state, getters).should.equal(0);
    // });

    it('read the correct timer displayable timeout', function () {
        getters.displayableTimeout(state)(2).should.equal('02');
        getters.displayableTimeout(state)(20).should.equal('20');
    });

    it('read the correct timer timeout state', function () {
        getters.hasTimerTimedOut(state).should.equal(false);
    });
});
