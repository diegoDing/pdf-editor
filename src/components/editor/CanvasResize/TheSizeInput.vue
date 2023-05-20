<script setup lang="ts">
import {computed, defineProps} from 'vue'
const props=defineProps({
    value:{type:String, default:''},
    disabled:{type:Boolean,default:false}
})
const inputClass=computed(()=>{
    let result=[]
    if (props.disabled){
        result.push('disabled')
    }
    return result.join(' ')
})
const emit=defineEmits(['update'])
const handleInput=(e)=>{
    console.log(e.target.value,'e.target.value')
    emit('update',e.target.value)
}
</script>

<template>
<input :value="props.value" class="the-size-input" :class="inputClass" @input="handleInput" />
</template>

<style scoped>
.the-size-input{
    background: transparent;
    border: 1px solid #000000;
    color: #000000;
    padding: 4px 0px 3px 4px;
    font-size: 13px;
    width: 100%;
    height: 24px;
    box-sizing: border-box;
    outline: 2px black;
}
.the-size-input.disabled{
    border: 1px solid #cbcccc;
    color: #cbcccc;
    outline: none;
}
</style>
