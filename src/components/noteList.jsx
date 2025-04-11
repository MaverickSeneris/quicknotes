function NoteList({notes, deleteNote}) {
    return (
        <div>
            <span>
                {notes.map((note, index) => { 
                    return (
                        <div key={index}>
                            <span>- {note.name} <button onClick={()=> deleteNote(note.name)}>delete</button></span>
                        </div>
                    )
                })}
            </span>
        </div>
    )
}

export default NoteList;        