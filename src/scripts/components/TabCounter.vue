<template>
<div class="tab counter" v-show="activeScreen === 'counter'">
    <div class="count-holder">
        <div class="count-value">{{ counterCount }}</div>
    </div>
    <div class="counter-controls">
        <div class="counter-control-container">
            <div class="counter-control count">
                <div class="counter-control-face fa fa-plus fa-3x"
                    @click="incrementCounterCount"></div>
            </div>
        </div>
        <div class="counter-control-container">
            <div class="counter-control reset">
                <div class="counter-control-face fa fa-close fa-3x"
                    @click="resetCounterCount"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations
} from 'vuex';

export default {
    computed: {
        ...mapState([
            'activeScreen'
        ]),
        ...mapGetters([
            'counterCount'
        ])
    },
    methods: {
        ...mapMutations([
            'incrementCounterCount',
            'resetCounterCount'
        ])
    }
};
</script>

<style lang="less" scoped>
@import '../../styles/mixins.less';

.counter {

    .count-holder {
        .box-sizing(border-box);
        padding: 10px;
        height: 70%;

        .count-value {
            display: block;
            position: relative;
            top: 50%;
            .transform(translateY(-50%));
            text-align: center;
            color: cyan;
            font-size: 10em;
            text-shadow: 0 0 4px #000;
        }
    }

    .counter-controls {
        .box-sizing(border-box);
        height: 30%;
        padding: 30px;

        .counter-control-container {
            .box-sizing(border-box);
            padding: 10px 20px;
            float: left;
            width: 50%;
            height: 100%;

            .counter-control {
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

                .counter-control-face {
                    display: block;
                    position: relative;
                    top: 50%;
                    .transform(translateY(-50%));
                    text-align: center;
                }
            }
        }

        @media (max-height: 600px) {
            padding: 5px;
        }
    }
}

</style>
