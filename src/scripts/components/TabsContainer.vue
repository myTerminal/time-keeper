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

</style>
