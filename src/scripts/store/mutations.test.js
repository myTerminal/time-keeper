/* global describe before it */

import Vue from 'vue';
import mutations from './mutations';

describe('mutations', function () {
    it('update the active screen', function () {
        const state = {};

        mutations.setActiveScreen(state, 'screen1');
        state.activeScreen.should.equal('screen1');
    });

    it('work correctly with the counter count', function () {
        const state = {
            counter: {
                count: 0
            }
        };

        mutations.incrementCounterCount(state);
        state.counter.count.should.equal(1);

        mutations.resetCounterCount(state);
        state.counter.count.should.equal(0);
    });

    it('set the timer timeout correctly', function () {
        const state = {
            countdownTimer: {
                timeout: 0
            }
        };

        mutations.setTimer(state, 34);
        state.countdownTimer.timeout.should.equal(34);
    });

    it('manipulate the countdown timer state correctly', function () {
        const state = {
            countdownTimer: {
                isRunning: false
            }
        };

        mutations.startCountdownTimer(state);
        state.countdownTimer.isRunning.should.equal(true);

        mutations.pauseCountdownTimer(state);
        state.countdownTimer.isRunning.should.equal(false);

        mutations.startCountdownTimer(state);
        state.countdownTimer.isRunning.should.equal(true);
    });

    it('ticks the timeout when required', function () {
        const state = {
            countdownTimer: {
                isRunning: false,
                timeout: 2
            }
        };

        mutations.tickCountdownTimer(state);
        state.countdownTimer.timeout.should.equal(2);

        state.countdownTimer.isRunning = true;
        mutations.tickCountdownTimer(state);
        state.countdownTimer.timeout.should.equal(1);

        state.countdownTimer.isRunning = false;
        mutations.tickCountdownTimer(state);
        state.countdownTimer.timeout.should.equal(1);

        state.countdownTimer.isRunning = true;
        mutations.tickCountdownTimer(state);
        state.countdownTimer.timeout.should.equal(0);

        mutations.tickCountdownTimer(state);
        state.countdownTimer.timeout.should.equal(0);
    });

    it('set and reset the timeout alarm', function () {
        const state = {
            countdownTimer: {
                hasTimedOut: false
            }
        };

        mutations.setCountdownTimerAlarm(state);
        state.countdownTimer.hasTimedOut.should.equal(true);

        mutations.dismissCountdownTimerAlarm(state);
        state.countdownTimer.hasTimedOut.should.equal(false);
    });
});


















