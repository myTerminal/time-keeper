import { prompt } from 'ample-alerts';

var timer;

const determineTimeout = function (hours, minutes, seconds) {
    return (hours * 60 * 60) + (minutes * 60) + seconds;
};

export default {
    promptUserToSetCountdown: context => {
        let hours = context.getters.timeoutHours,
            minutes = context.getters.timeoutMinutes,
            seconds = context.getters.timeoutSeconds;

        context.dispatch('pauseTimer');

        prompt('Set hours:', {
            defaultResponse: hours,
            onAction: r1 => {
                hours = +(r1 || 0);

                context.commit('setTimer',
                    determineTimeout(hours, minutes, seconds));

                prompt('Set minutes:', {
                    defaultResponse: context.getters.timeoutMinutes,
                    onAction: r2 => {
                        minutes = +(r2 || 0);

                        context.commit('setTimer',
                            determineTimeout(hours, minutes, seconds));

                        prompt('Set seconds:', {
                            defaultResponse: context.getters.timeoutSeconds,
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