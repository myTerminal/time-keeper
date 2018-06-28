<template>
<div class="tab-controls">
    <div class="tab-control" @click="setActiveScreen('countdown-timer')">
        Countdown Timer
    </div>
    <div class="tab-control" @click="setActiveScreen('counter')">
        Counter
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
@import '../../styles/mixins.less';

</style>
