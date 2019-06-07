<template>
<div class="container">
    <tab-controls></tab-controls>
    <tabs-container></tabs-container>
</div>
</template>

<script>
import TabControls from '../TabControls/TabControls.vue';
import TabsContainer from '../TabsContainer/TabsContainer.vue';

export default {
    components: {
        TabControls,
        TabsContainer
    }
};
</script>

<style lang="less" scoped>
@import '../../../../node_modules/effortless-css/less/all.less';

.container {
    .box-sizing(border-box);
    width: 100%;
    height: 100%;
    padding: 50px 0;
    padding-bottom: 0;
}
</style>
