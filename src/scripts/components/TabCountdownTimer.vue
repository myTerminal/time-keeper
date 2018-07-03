<template>
<div class="tab countdown-timer"
    v-show="activeScreen === 'countdown-timer'"
    v-bind:class="{ illuminate: hasTimerTimedOut }">
    <div class="time-holder">
        <div class="time-value"
            v-bind:class="{ blink: !isCountdownTimerRunning }">
            {{
                displayableTimeout(timeoutHours) +
                ':' +
                displayableTimeout(timeoutMinutes) +
                ':' +
                displayableTimeout(timeoutSeconds)
            }}
        </div>
    </div>
    <div class="timer-controls">
        <div class="timer-control-container">
            <div class="timer-control count">
                <div class="timer-control-face fa fa-3x"
                    v-bind:class="{
                        'fa-play': !isCountdownTimerRunning,
                        'fa-pause': isCountdownTimerRunning
                    }"
                    @click="toggleTimer"></div>
            </div>
        </div>
        <div class="timer-control-container">
            <div class="timer-control reset">
                <div class="timer-control-face fa fa-edit fa-3x"
                    @click="promptUserToSetCountdown"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} from 'vuex';

export default {
    computed: {
        ...mapState([
            'activeScreen'
        ]),
        ...mapGetters([
            'isCountdownTimerRunning',
            'timeout',
            'timeoutHours',
            'timeoutMinutes',
            'timeoutSeconds',
            'displayableTimeout',
            'hasTimerTimedOut'
        ])
    },
    methods: {
        ...mapMutations([
            'tickCountdownTimer'
        ]),
        ...mapActions([
            'promptUserToSetCountdown',
            'toggleTimer'
        ])
    }
};
</script>

<style lang="less" scoped>
@import '../../styles/mixins.less';

@-webkit-keyframes blink {
    to {
        .opacity(0);
    }
}

@keyframes blink {
    to {
        .opacity(0);
    }
}

@-webkit-keyframes illuminate {
    to {
        box-shadow: 0 0 100px cyan inset;
    }
}

@keyframes illuminate {
    to {
        box-shadow: 0 0 100px cyan inset;
    }
}

.countdown-timer {

    &.illuminate {
        .animation(illuminate 1s ease-in-out 0s infinite alternate);
    }

    .time-holder {
        .box-sizing(border-box);
        padding: 10px;
        height: 70%;

        .time-value {
            display: block;
            position: relative;
            top: 50%;
            .transform(translateY(-50%));
            text-align: center;
            color: cyan;
            font-size: 8em;
            text-shadow: 0 0 4px #000;

            &.blink {
                .animation(blink 0.5s ease-in-out 0s infinite alternate);
            }
        }
    }

    .timer-controls {
        .box-sizing(border-box);
        height: 30%;
        padding: 30px;

        .timer-control-container {
            .box-sizing(border-box);
            padding: 10px 20px;
            float: left;
            width: 50%;
            height: 100%;

            .timer-control {
                height: 100%;
                color: cyan;
                background-color: #044;
                cursor: pointer;
                border: 2px solid cyan;
                .round-borders(20px);
                box-shadow: 0 0 20px #000;

                &.active,
                &:hover {
                    color: #044;
                    background-color: cyan;
                }

                .timer-control-face {
                    display: block;
                    position: relative;
                    top: 50%;
                    .transform(translateY(-50%));
                    text-align: center;
                }
            }
        }
    }
}

</style>
