import { useState } from "react";

function NoteList({ notes, deleteNote, toggleNote, toggleEdit, updateNote }) {
  const [newTitle, setNewTitle] = useState("")

  function handleSubmit(e) { 
    e.preventDefault()
    if (newTitle.trim() == "") return;
    const id = e.currentTarget.dataset.id;
    updateNote(id, newTitle)
    setNewTitle("")
  }
  
  return (
    <div>
      <span>
        {notes.map((note, index) => {
          return (
            <div
              className="group flex items-center px-2 py-2 border-[1px] my-1 rounded-[10px] transition duration-100 ease-in-out hover:border-blue-500 hover:border-[3px]"
              key={index}
            >
              {note.isEditing ? (
                <form
                  data-id={note.id}
                  onSubmit={handleSubmit}
                  className="flex w-full content-between items-center"
                >
                  <input
                    className="border-0 outline-0 mr-auto flex-grow"
                    type="text"
                    value={newTitle}
                    placeholder={note.name}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                  <button className="ml-2 cursor-pointer self-end text-green-500 font-bold text-sm">
                    💾
                  </button>
                  <button className="ml-1" onClick={()=>toggleEdit(note.id)}>🚫</button>
                </form>
              ) : (
                <>
                  <div
                    onClick={() => toggleNote(note.id)}
                    className={
                      "flex content-center items-center w-6 h-6 mr-2 border rounded-[50px]"
                    }
                  >
                    <span>{note.isDone && "✔"}</span>
                  </div>
                  <span className={note.isDone ? "line-through" : undefined}>
                    {note.name}
                  </span>
                  <button
                    onClick={() => toggleEdit(note.id)}
                    className="cursor-pointer ml-auto text-green-400 font-bold text-sm hover:scale-105 transition duration-150 opacity-0 group-hover:opacity-100 group-hover:block"
                  >
                    📝
                  </button>
                  <button
                    className="cursor-pointer ml-2 hover:scale-105 transition duration-150 opacity-0 group-hover:opacity-100 group-hover:block"
                    onClick={() => deleteNote(note.id)}
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
