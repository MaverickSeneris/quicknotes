function NoteList({ notes, deleteNote, toggleNote, toggleEdit }) {
  return (
    <div>
      <span>
        {notes.map((note, index) => {
          return (
            <div
              className="group flex items-center px-2 py-2 border-[1px] my-1 rounded-[10px] transition duration-100 ease-in-out hover:border-blue-500 hover:border-[3px]"
              key={index}
            >
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
                onClick={()=>toggleEdit(note.id)}
                className="cursor-pointer ml-auto text-green-400 font-bold text-sm hover:scale-105 transition duration-150 opacity-0 group-hover:opacity-100 group-hover:block"
              >
                Edit
              </button>
              <button
                className="cursor-pointer ml-2 hover:scale-105 transition duration-150 opacity-0 group-hover:opacity-100 group-hover:block"
                onClick={() => deleteNote(note.id)}
              >
                ❌
              </button>
            </div>
          );
        })}
      </span>
    </div>
  );
}

export default NoteList;
