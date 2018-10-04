<template>
<div class="tab-controls">
    <div class="tab-control"
        v-bind:class="{ active: activeScreen === 'countdown-timer' }"
        @click="setActiveScreen('countdown-timer')">
        <div class="tab-control-face fa fa-clock-o fa-4x"></div>
    </div>
    <div class="tab-control"
        v-bind:class="{ active: activeScreen === 'counter' }"
        @click="setActiveScreen('counter')">
        <div class="tab-control-face fa fa-th fa-4x"></div>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapMutations
} from 'vuex';

export default {
    computed: {
        ...mapState([
            'activeScreen'
        ])
    },
    methods: {
        ...mapMutations([
            'setActiveScreen'
        ])
    }
};
</script>

<style lang="less" scoped>
@import '../../../styles/mixins.less';

.tab-controls {
    .box-sizing(border-box);
    float: left;
    width: 30%;
    height: 100%;
    box-shadow: 0 0 40px #000;

    @media (orientation: portrait) {
        width: 100%;
        height: 20%;
    }

    .tab-control {
        .box-sizing(border-box);
        float: left;
        padding: 10px;
        width: 100%;
        height: 50%;
        color: #0cc;
        background-color: #044;
        cursor: pointer;

        &:hover {
            color: cyan;
            box-shadow: 0 0 40px #066 inset;
        }

        &.active {
            color: cyan;
            background-color: #066;
            box-shadow: 0 0 40px cyan inset;
        }

        @media (orientation: portrait) {
            width: 50%;
            height: 100%;
        }

        .tab-control-face {
            display: block;
            position: relative;
            top: 50%;
            .transform(translateY(-50%));
            text-align: center;
        }
    }
}

</style>
