import {contextMenuStore} from "@/store/contextMenu.ts";
import {ContextMenuStyle} from "@/modal/ContextMenu.ts";
let menuStore:ContextMenuStyle=contextMenuStore() as ContextMenuStyle

window.addEventListener('contextmenu',(e)=>{
    e.preventDefault()
    const {x,y}=e
    console.log(x, y)
    menuStore.x = x + 'px'
    menuStore.y = y + 'px'
    menuStore.display='block'
})

window.addEventListener('click',()=>{
    menuStore.display='none'
})
