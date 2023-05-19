<script setup lang="ts">
import {mainStore} from "../../store";

const {size}=mainStore()
</script>

<template>
    <div class="canvas-resize">
        <span>尺寸比例模式{{size.unit}}</span>
        <span>比例宽度{{size.width}}</span>
        <span>比例高度{{size.height}}</span>
    </div>
</template>

<style scoped>
.canvas-resize{
    position: absolute;
    top: -50px;
    margin: 0px auto;
}
</style>
