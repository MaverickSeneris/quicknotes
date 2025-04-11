import { useState } from "react";
import FormInput from "./components/formInput";
import NoteList from "./components/noteList";


function App() { 
  const [notes, setNotes] = useState([]);
  return (
    <div className="m-4 flex flex-col justify-center items-center">
      <h1 className="mb-4 font-bold text-3xl">QuickNotes</h1>
      <FormInput notes={notes} setNotes={setNotes} />
      <NoteList notes={notes}/>
    </div>
  )
}

export default App;
