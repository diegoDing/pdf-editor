export interface ContextMenuAction {
    text:String,
    value:String,
    event:Function|Promise<any>
}
export interface ContextMenuStyle{
    x:String,
    y:String,
    display:'block'|'none'
}
