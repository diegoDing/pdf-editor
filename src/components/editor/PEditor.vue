<script setup lang="ts">
import {computed} from "vue";
import {mainStore} from "@/store";
import CanvasResize from "./CanvasResize/CanvasResize.vue";
const {size}=mainStore()
const computedWrapperStyle=computed(()=>{
    return{
        width:size.width+size.unit,
        height:size.height+size.unit,
        top:`calc(50% - ${size.height/2+size.unit})`
    }
})
</script>

<template>
  <div class="wrapper" :style="computedWrapperStyle">
      <canvas-resize/>
  </div>
</template>

<style scoped>

.wrapper{
    margin: 0 auto;
    background: white;
    position: relative;
}
</style>
