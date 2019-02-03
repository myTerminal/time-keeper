// const screens = {
//     countdownTimer: 'countdown-timer',
//     counter: 'counter'
// };

export default {
    counterCount: state => state.counter.count,
    isCountdownTimerRunning: state => state.countdownTimer.isRunning,

    timeout: state => state.countdownTimer.timeout,
    timeoutSeconds: state => state.countdownTimer.timeout % 60,
    timeoutMinutes: (state, getters) =>
        ((state.countdownTimer.timeout - getters.timeoutSeconds) / 60) % 60,
    timeoutHours: (state, getters) =>
        (state.countdownTimer.timeout - (getters.timeoutMinutes * 60) - getters.timeoutSeconds)
        / (60 * 60),
    displayableTimeout: state =>
        timeout =>
            (('' + timeout).length === 2 ? ('' + timeout) : ('0' + timeout)),
    hasTimerTimedOut: state => state.countdownTimer.hasTimedOut
};
