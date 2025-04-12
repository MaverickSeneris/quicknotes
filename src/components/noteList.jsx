function NoteList({ notes, deleteNote, toggleNote}) {
  

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
                <span>✔</span>
              </div>
              <span>{note.name}</span>
              <button
                className="cursor-pointer ml-auto text-red-600 font-bold hover:text-red-800 hover:scale-105 transition duration-150 opacity-0 group-hover:opacity-100 group-hover:block"
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
