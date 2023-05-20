<script setup lang="ts">
import {ref} from "vue";
import {ContextMenuAction} from "@/modal/ContextMenu.ts";
import {contextMenuStore} from "@/store/contextMenu.ts";

const actions=ref<ContextMenuAction[]>([
    {
        text:'添加',
        value:'add',
        event:()=>{
            console.log('add')
        }
    },
    {
        text:'删除',
        value:'删除',
        event:()=>{
            console.log('delete')
        }
    },
    ]
)
const menuStore=contextMenuStore()
</script>

<template>
  <div class="context-menu-wrapper" :style="menuStore.style">
     <div v-for="action in actions" :key="action.value" @click="action.event">{{action.text}}</div>
  </div>
</template>

<style scoped>

.context-menu-wrapper{
    border: 1px solid;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(255,0,0,0.7);
    color: blanchedalmond;
    display: none;
}
.context-menu-wrapper>div{
    padding:3px 15px;
    cursor: pointer;
}
.context-menu-wrapper>div:hover{
    background: rgba(255,0,0,0.5);
}
</style>
