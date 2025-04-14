import { useState } from "react";

// Main NoteList component - receives props to manage and display notes
function NoteList({
  notes,
  isDark,
  deleteNote,
  toggleNote,
  toggleEdit,
  updateNote,
}) {
  const [newTitle, setNewTitle] = useState(""); // shared input state for editing notes

  // Handles form submission for editing a note
  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload
    if (newTitle.trim() == "") return; // prevent empty submissions
    const id = e.currentTarget.dataset.id; // get the note's ID from form
    updateNote(id, newTitle); // update note via parent function
    setNewTitle(""); // clear input field
  }

  return (
    <div>
      <span>
        {/* Loop through each note */}
        {notes.map((note, index) => {
          return (
            <div
              key={index} // ⚠️ index as key is okay for static lists, but avoid if list changes often
              className={`
                ${isDark && "border-white"} 
                ${isDark && "text-white"} 
                group flex items-center px-2 py-2 
                border-[1px] my-1 rounded-[10px] 
                transition duration-100 ease-in-out 
                hover:border-blue-500 hover:border-[3px]`}
            >
              {/* Conditional rendering: if editing, show input form */}
              {note.isEditing ? (
                <form
                  data-id={note.id} // custom attribute to pass note ID
                  onSubmit={handleSubmit}
                  className="flex w-full content-between items-center"
                >
                  <input
                    type="text"
                    value={newTitle}
                    placeholder={note.name} // placeholder shows current name
                    onChange={(e) => setNewTitle(e.target.value)} // update input value
                    className="border-0 outline-0 mr-auto flex-grow"
                  />
                  {/* Save button */}
                  <button className="ml-2 cursor-pointer self-end text-green-500 font-bold text-sm">
                    💾
                  </button>
                  {/* Cancel editing */}
                  <button className="ml-1" onClick={() => toggleEdit(note.id)}>
                    🚫
                  </button>
                </form>
              ) : (
                <>
                  {/* Toggle note done/undone */}
                  <div
                    onClick={() => toggleNote(note.id)}
                    className="flex content-center items-center w-6 h-6 mr-2 border rounded-[50px]"
                  >
                    <span>{note.isDone && "✔"}</span>
                  </div>

                  {/* Display note name, strike through if done */}
                  <span className={note.isDone ? "line-through" : undefined}>
                    {note.name}
                  </span>

                  {/* Edit button - only shows on hover (group-hover) */}
                  <button
                    onClick={() => toggleEdit(note.id)}
                    className="cursor-pointer ml-auto text-green-400 font-bold text-sm hover:scale-105 transition duration-150 opacity-0 group-hover:opacity-100 group-hover:block"
                  >
                    📝
                  </button>

                  {/* Delete button - also appears on hover */}
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="cursor-pointer ml-2 hover:scale-105 transition duration-150 opacity-0 group-hover:opacity-100 group-hover:block"
                  >
                    ❌
                  </button>
                </>
              )}
            </div>
          );
        })}
      </span>
    </div>
  );
}

export default NoteList;
