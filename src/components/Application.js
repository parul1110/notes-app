import searchLogo from "../images/search.png";
import Button from "./Button";
import Modal from "./Modal";
import { useState, useRef } from "react";
import NoteBoxes from "./NoteBoxes";
import {useDispatch} from "../api/Context";

function Application() {
  const [showDialog, setDialog] = useState(false);
  const [searchText, setSearch] = useState('');
  const dispatch = useDispatch();
  const id = useRef(0);
  const searchtxt = useRef('');

  const handleSearchIcon =(e)=>{
    setSearch(searchtxt.current);
  }

  const setTxt = (e)=>{
    searchtxt.current = e.target.value;
  }

  const loadDialog = (e) => {
    setDialog(true);
  }

  const onSave = (text) => {
    setDialog(false);
    const item = {
      id: id.current,
      note: text
    };
    id.current = id.current+1;;
    dispatch({type: "Add", item: item});
  }

  const onClose = (e) => {
    setDialog(false);
  }

  return (
    <div>
        <Button value="Add" onClick={loadDialog}></Button>
              <span className="Searchbox">
              <input id ="Searchinput" type="text" placeholder="Search..." className="bar" onChange={setTxt} />
              <button className="imgbox" type="submit" onClick={handleSearchIcon}><img src={searchLogo} className="imgsrch" /></button>
              </span>
        <div>
        {showDialog && <Modal header="Add Notes" save={onSave} close={onClose}/>}
        </div>
        <NoteBoxes term = {searchText} />
    </div>
  );
}

export default Application;