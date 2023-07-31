import NoteBox from "./NoteBox";
import {useNotes} from "../api/Context";

export default function NoteBoxes({term}){
    const dt = useNotes();
    let data = [];
    data = dt.map((item) => {
        if(term!==''){
            if(item.note.indexOf(term) !== -1){
                return <NoteBox value = {item.note} key = {item.id} id = {item.id} />;
            }
            return ;
        }else{
            return <NoteBox value = {item.note} key = {item.id} id = {item.id} />;
        }

    });

return (<div className="noteboxes">
         {data}
         </div>
    );
}
