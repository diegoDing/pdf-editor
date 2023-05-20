import {defineStore} from "pinia";
import {config} from "@/common/localStorage";

export const mainStore=defineStore('main',{
    state:()=>{
        return{
            size:config.value.pageSize
        }
    },
})
