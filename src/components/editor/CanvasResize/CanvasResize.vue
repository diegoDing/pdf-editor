<script setup lang="ts">
import {mainStore} from "@/store";
import TheSizeInput from "./TheSizeInput.vue";
import {watchEffect} from "vue";
import {storeToRefs} from "pinia";
import {config} from "@/common/localStorage";
import PageSize from "@/modal/config/PageSize.ts";

const store=mainStore()
let {size}=storeToRefs(store)
watchEffect(()=>{
    console.log(size, 'size')
    config.value.pageSize=size as PageSize
})
</script>

<template>
    <div class="canvas-resize">
        <div style="margin-right: 10px;">单位：{{size.unit}}</div>
        <div class="input-wrapper">
            <the-size-input :value="size.width" @update="(v)=>size.width=v"/>
        </div>
        <div style="color: #cbcccc;font-size: 10px;margin: 0 5px;height: 24px;line-height: 24px">X</div>
        <div class="input-wrapper"> <the-size-input :value="size.height" @update="(v)=>size.height=v"/></div>
    </div>
</template>

<style scoped>
.input-wrapper{
    width: 40px;
    margin-right: 5px;
}
.canvas-resize{
    position: absolute;
    top: -50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background: #f8f9f9;
    border-radius: 5px;
    padding: 10px;
    font-size: 13px;
}
</style>
