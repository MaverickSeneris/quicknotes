import { useEffect, useState } from "react";
import FormInput from "./components/formInput";
import NoteList from "./components/noteList";

function App() {
  // Load stored notes from localStorage or initialize as an empty array
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("storedNotes")) || []
  );

  // Load dark mode setting from localStorage or default to false
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );

  // Persist theme mode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  // Persist notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("storedNotes", JSON.stringify(notes));
  }, [notes]);

  // Adds a new note to the list
  function addNewNote(newNote) {
    setNotes((prevNote) => [...prevNote, newNote]);
  }

  // Deletes a note based on its ID
  function deleteNote(noteToDel) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteToDel));
  }

  // Toggles the "done" status of a note
  function toggleNote(noteId) {
    setNotes((prevNote) =>
      prevNote.map((note) =>
        note.id === noteId ? { ...note, isDone: !note.isDone } : note
      )
    );
  }

  // Toggles edit mode on a note
  function toggleEdit(noteId) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, isEditing: !note.isEditing } : note
      )
    );
  }

  // Updates a note's name and exits edit mode
  function updateNote(noteId, updatedName) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId
          ? { ...note, name: updatedName, isEditing: !note.isEditing }
          : note
      )
    );
  }

  // Toggles the theme between light and dark
  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  console.log(notes); // for debugging

  return (
    <div
      className={`h-[100vh] transition-colors duration-500 ${
        isDark ? "bg-gray-950" : "bg-white"
      } flex flex-col items-center pt-6`}
    >
      {/* Header */}
      <div className="w-80 mb-4 flex content-between items-center">
        <h1 className={`${isDark && "text-white"} font-bold text-5xl`}>
          QuickNotes
        </h1>
        <div className="ml-auto pl-2 text-3xl" onClick={toggleTheme}>
          {isDark ? " 🌜 " : "  🌞"}
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col gap-2">
        <FormInput notes={notes} isDark={isDark} addNewNote={addNewNote} />
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
