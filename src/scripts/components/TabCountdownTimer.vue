<template>
<div class="tab countdown-timer" v-show="activeScreen === 'countdown-timer'">
    Countdown Timer
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'activeScreen'
        ])
    }
};
</script>

<style lang="less" scoped>
@import '../../styles/mixins.less';

</style>
