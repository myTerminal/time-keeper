<template>
<div class="tabs-container">
    <tab-countdown-timer></tab-countdown-timer>
    <tab-counter></tab-counter>
</div>
</template>

<script>
import TabCountdownTimer from '../TabCountdownTimer/TabCountdownTimer.vue';
import TabCounter from '../TabCounter/TabCounter.vue';

export default {
    components: {
        TabCountdownTimer,
        TabCounter
    }
};
</script>

<style lang="less" scoped>
@import '../../../../node_modules/effortless-css/less/all.less';

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
    }
}

</style>
