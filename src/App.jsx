import { useState } from "react";
import FormInput from "./components/formInput";
import NoteList from "./components/noteList";

function App() {
  const [notes, setNotes] = useState([]);

  function addNewNote(newNote) {
    setNotes((prevNote) => [...prevNote, newNote]);
  }

  function deleteNote(noteToDel) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteToDel));
  }

  function toggleNote(noteId) {
    setNotes((prevNote) =>
      prevNote.map((note) =>
        note.id === noteId ? { ...note, isDone: !note.isDone } : note
      )
    );
  }

  function toggleEdit(noteId) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, isEditing: !note.isEditing } : note
      )
    );
  }

  function updateNote(noteId, updatedName) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId
          ? { ...note, name: updatedName, isEditing: !note.isEditing }
          : note
      )
    );
  }

  console.log(notes);

  return (
    <div className="m-4 flex flex-col justify-center items-center">
      <h1 className="mb-4 font-bold text-3xl">QuickNotes</h1>
      <div className="flex flex-col gap-2">
        <FormInput notes={notes} addNewNote={addNewNote} />
        <NoteList
          notes={notes}
          deleteNote={deleteNote}
          toggleNote={toggleNote}
          toggleEdit={toggleEdit}
          updateNote={updateNote}
        />
      </div>
    </div>
  );
}

export default App;
