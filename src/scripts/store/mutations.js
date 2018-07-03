export default {
    setActiveScreen: (state, screen) => {
        state.activeScreen = screen;
    },

    incrementCounterCount: state => {
        state.counter.count += 1;
    },
    resetCounterCount: state => {
        state.counter.count = 0;
    },

    setTimer: (state, t) => {
        state.countdownTimer.timeout = t;
    },
    startCountdownTimer: state => {
        state.countdownTimer.isRunning = true;
    },
    pauseCountdownTimer: state => {
        state.countdownTimer.isRunning = false;
    },
    toggleCountdownTimer: state => {
        state.countdownTimer.isRunning = !state.countdownTimer.isRunning;
    },
    tickCountdownTimer: state => {
        if (state.countdownTimer.isRunning && state.countdownTimer.timeout) {
            state.countdownTimer.timeout -= 1;
        }
    },
    setCountdownTimerAlarm: state => {
        state.countdownTimer.hasTimedOut = true;
    },
    dismissCountdownTimerAlarm: state => {
        state.countdownTimer.hasTimedOut = false;
    }
};