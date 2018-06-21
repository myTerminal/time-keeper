<template>
<div class="header">
    <b>{{packageDetails.name}}</b> - {{packageDetails.description}} (v{{packageDetails.version}})
    <a class="source fa fa-github fa-lg" href="https://github.com/myTerminal/time-keeper" target="_blank">&nbsp;</a>
</div>
</template>

<script>
const packageDetails = require('../../../package.json');

export default {
    data: function () {
        return {
            packageDetails
        };
    }
};
</script>

<style lang="less" scoped>
.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #000;
    color: #eee;

    .source {
        margin-left: 5px;
        color: #fff;
        text-decoration: none;
    }
}
</style>
