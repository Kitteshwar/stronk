// @client
interface ListItemsProps {
  index: number;
  exerciseChoice: string;
  onClick?: () => void;
}
function ListItem({ index, exerciseChoice, onClick}: ListItemsProps) {
  
  return (
    <button
      className="text-slate-200 hover:bg-sky-700 
m-2 py-5 max-w-xs pl-10 
border-10 border-solid 
rounded-lg border-rose-500"
      key={index}
      onClick={onClick}
    >
      {exerciseChoice}
    </button>
  );
}
export default ListItem;
