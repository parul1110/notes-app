import './App.css';
import "./Styles/Mixins.scss";
import {NotesProvider} from "./api/Context";
import Application from './components/Application';

function App() {
  return (
    <div className="App">
    <NotesProvider>
      <Application />
    </NotesProvider>
    </div>
  );
}

export default App;