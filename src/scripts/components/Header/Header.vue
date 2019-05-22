<template>
<div class="header">
  <i id="pwa-install"
     class="fa fa-plus-square-o fa-lg"
     title="Install as an app"
     aria-hidden="true"
     style="display: none;"
     />
  <span id="app-name">{{packageDetails.name}}</span>
  <span id="app-description"> - {{packageDetails.description}}</span>
  <span id="app-version">(v{{packageDetails.version}})</span>
  <a id="app-source" class="fa fa-github fa-lg" href="https://github.com/myTerminal/time-keeper" target="_blank">&nbsp;</a>
</div>
</template>

<script>
const packageDetails = require('../../../../package.json');

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

    #pwa-install {
        cursor: pointer;
    }

    #app-name {
        font-weight: bold;
    }

    #app-description {

        @media (orientation: portrait) {
            display: none;
        }
    }

    #app-source {
        margin-left: 5px;
        color: #fff;
        text-decoration: none;
    }
}
</style>
