<template>
<div class="root-container">
  <page-header></page-header>
  <page-container></page-container>
  <page-footer></page-footer>
</div>
</template>

<script>
import PageHeader from './Header.vue';
import PageFooter from './Footer.vue';
import PageContainer from './Container.vue';

export default {
    components: {
        PageHeader,
        PageFooter,
        PageContainer
    }
};
</script>

<style lang="less" scoped>
.root-container {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #044;
}
</style>
