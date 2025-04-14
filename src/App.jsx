import { useEffect, useState } from "react";
import FormInput from "./components/formInput";
import NoteList from "./components/noteList";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("storedNotes")) || []
  );

  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("storedNotes", JSON.stringify(notes));
  }, [notes]);

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

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  console.log(notes);

  return (
    <div
      className={`h-100 ${
        isDark && "bg-gray-950"
      } flex flex-col items-center pt-6`}
    >
      <div className="w-75 mb-4 flex content-between items-center">
        <h1 className={`${isDark && "text-white"} font-bold text-3xl`}>
          QuickNotes
        </h1>
        <div className="ml-auto" onClick={toggleTheme}>
          {isDark ? " 🌜 " : "  🌞"}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <FormInput
          notes={notes}
          isDark={isDark}
          addNewNote={addNewNote}
        />
        <NoteList
          notes={notes}
          isDark={isDark}
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
