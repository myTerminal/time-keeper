<template>
<div class="tab counter" v-show="activeScreen === 'counter'">
    Counter
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
