import { prompt } from 'ample-alerts';

var timer;

const determineTimeout = function (hours, minutes, seconds) {
    return (hours * 60 * 60) + (minutes * 60) + seconds;
};

export default {
    promptUserToSetCountdown: context => {
        let hours = 0,
            minutes = 0,
            seconds = 0;

        context.dispatch('pauseTimer');

        prompt('Set hours:', {
            onAction: r1 => {
                hours = +(r1 || 0);

                context.commit('setTimer',
                    determineTimeout(hours, minutes, seconds));

                prompt('Set minutes:', {
                    onAction: r2 => {
                        minutes = +(r2 || 0);

                        context.commit('setTimer',
                            determineTimeout(hours, minutes, seconds));

                        prompt('Set seconds:', {
                            onAction: r3 => {
                                seconds = +(r3 || 0);

                                context.commit('setTimer',
                                    determineTimeout(hours, minutes, seconds));
                            }
                        });
                    }
                });
            }
        });
    },
    startTimer: context => {
        context.commit('startCountdownTimer');

        timer = setInterval(() => {
            context.commit('tickCountdownTimer');

            if (!context.state.countdownTimer.timeout) {
                context.dispatch('pauseTimer');
            }
        }, 1000);
    },
    pauseTimer: context => {
        context.commit('pauseCountdownTimer');

        clearInterval(timer);
    },
    toggleTimer: context => {
        if (context.state.countdownTimer.isRunning) {
            context.dispatch('pauseTimer');
        } else {
            context.dispatch('startTimer');
        }
    }
};