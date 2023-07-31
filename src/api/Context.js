import { createContext, useContext, useReducer } from "react";

const NoteContext = createContext([]);
const DispatchContext = createContext(null);

export function useNotes(){
    return useContext(NoteContext);
}

export function useDispatch(){
    return useContext(DispatchContext);
}

export function NotesProvider({children}){
    const [notes, dispatch] = useReducer(notesDispatch,[])
    return (
        <NoteContext.Provider value = {notes}>
            <DispatchContext.Provider value = {dispatch}>
                {children}
            </DispatchContext.Provider>
        </NoteContext.Provider>
    );
}

function notesDispatch(state, action){
    switch(action.type){
        case "Add":
            return [...state, action.item];
        case "Delete":
            return state.filter((item) => (item.id!==action.id));
        default:
            throw new Error();
    }
}