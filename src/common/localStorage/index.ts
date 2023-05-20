import {useStorage} from "@vueuse/core";
import {DICT_CONSTANT_CONFIG} from "./constant.ts";

const config=useStorage(DICT_CONSTANT_CONFIG,{
    pageSize:{
        width:90,
        height:90,
        unit:'%'
    }
})
export {
    config
}
