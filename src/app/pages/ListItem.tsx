
interface ListItemsProps{
    index:number;
    exerciseChoice:string;
}
function ListItem({index, exerciseChoice}:ListItemsProps){
    return(

            
<div className="text-slate-200 hover:bg-sky-700 m-2 py-5 max-w-xs pl-10 border-10 border-solid rounded-lg border-rose-500" key = {index}>{exerciseChoice}</div>
);
}
export default ListItem;