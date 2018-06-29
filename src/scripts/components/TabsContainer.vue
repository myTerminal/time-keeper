<template>
<div class="tabs-container">
    <tab-countdown-timer></tab-countdown-timer>
    <tab-counter></tab-counter>
</div>
</template>

<script>
import TabCountdownTimer from './TabCountdownTimer.vue';
import TabCounter from './TabCounter.vue';

export default {
    components: {
        TabCountdownTimer,
        TabCounter
    }
};
</script>

<style lang="less" scoped>
@import '../../styles/mixins.less';

.tabs-container {
    .box-sizing(border-box);
    float: left;
    width: 70%;
    height: 100%;

    @media (orientation: portrait) {
        width: 100%;
        height: 80%;
    }

    .tab {
        height: 100%;
        padding: 10px;
    }
}

</style>
