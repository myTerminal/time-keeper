<template>
<div class="container">
    <tab-controls></tab-controls>
    <tabs-container></tabs-container>
</div>
</template>

<script>
import TabControls from './TabControls.vue';
import TabsContainer from './TabsContainer.vue';

export default {
    components: {
        TabControls,
        TabsContainer
    }
};
</script>

<style lang="less" scoped>
@import '../../styles/mixins.less';

.container {
    .box-sizing(border-box);
    width: 100%;
    height: 100%;
    padding: 50px 0;
}
</style>
