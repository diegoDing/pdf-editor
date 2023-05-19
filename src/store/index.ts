import {defineStore} from "pinia";

export const mainStore=defineStore('main',{
    state:()=>{
        return{
            size:{
                width:50,
                height:50,
                unit:'%'
            }
        }
    }
})
