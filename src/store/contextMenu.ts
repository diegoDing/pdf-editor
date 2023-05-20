import {defineStore} from "pinia";
export const contextMenuStore=defineStore('contextMenu',{
    state:()=>{
        return{
            x:'0px',
            y:'0px',
            display:'none'
        }
    },
    getters:{
        style({x,y,display}){
            return {
                left:x,
                top:y,
                display
            }
        }
    }
})
