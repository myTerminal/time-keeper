/* global describe before it */

import Vue from 'vue';
import sinon from 'sinon';
import actions from './actions';

describe('actions', function () {
    var commit = sinon.fake(),
        dispatch = sinon.fake(),
        state;

    before(function () {
        state = {
            countdownTimer: {
                isRunning: false,
                timeout: 0
            }
        };
    });

    it('stops the timer is already at zero', function () {
        commit = sinon.fake();
        dispatch = sinon.fake();
        this.clock = sinon.useFakeTimers();

        actions.startTimer({
            state,
            commit,
            dispatch
        });

        commit.args[0].should.deep.equal(['startCountdownTimer']);

        this.clock.tick(1200);

        commit.args[1].should.deep.equal(['tickCountdownTimer']);
        commit.args[2].should.deep.equal(['setCountdownTimerAlarm']);
        dispatch.args[0].should.deep.equal(['pauseTimer']);

        this.clock.restore();
    });

    it('starts the timer when command is received', function () {
        commit = sinon.fake();
        dispatch = sinon.fake();
        this.clock = sinon.useFakeTimers();
        state.countdownTimer.timeout = 5;

        actions.startTimer({
            state,
            commit,
            dispatch
        });

        commit.args[0].should.deep.equal(['startCountdownTimer']);

        this.clock.tick(1200);

        commit.args[1].should.deep.equal(['tickCountdownTimer']);

        this.clock.restore();
    });

    it('pauses the timer when command is received', function () {
        commit = sinon.fake();

        actions.pauseTimer({
            commit
        });

        commit.args[0].should.deep.equal(['pauseCountdownTimer']);
    });

    it('toggles the timer when command is received', function () {
        commit = sinon.fake();
        dispatch = sinon.fake();

        actions.toggleTimer({
            state,
            commit,
            dispatch
        });

        commit.args[0].should.deep.equal(['dismissCountdownTimerAlarm']);
        dispatch.args[0].should.deep.equal(['startTimer']);

        state.countdownTimer.isRunning = true;
        actions.toggleTimer({
            state,
            commit,
            dispatch
        });

        commit.args[1].should.deep.equal(['dismissCountdownTimerAlarm']);
        dispatch.args[1].should.deep.equal(['pauseTimer']);
    });
});
