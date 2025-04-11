function NoteList({notes}) {
    return (
        <div>
            <span>
                {notes.map((note, index) => { 
                    return (
                        <div key={index}>
                            <span>- {note.name}</span>
                        </div>
                    )
                })}
            </span>
        </div>
    )
}

export default NoteList;