import { useDispatch } from "../api/Context";

export default function NoteBox({value, id}){
    const dispatch = useDispatch();
    const onDelete = (e)=>{
          dispatch({type: "Delete", id: id});
    }
    return (
        <>
            <span className="modal-dialog-notebox">
            <button type="button" className="note-close light-theme" onClick={onDelete}>&times;</button>
                {value}</span>
        </>
    );
}