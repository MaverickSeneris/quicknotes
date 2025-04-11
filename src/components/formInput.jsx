import { useState } from "react";

function FormInput({ notes, setNotes }) {
    const [title, setTitle] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const newNote = { name: title, isDone: false }
        setNotes([...notes, newNote])
        setTitle('')
    }
    return (
      <div>
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            className="border p-1"
            type="text"
            placeholder="enter notes"
            value={title}
            onChange={e=>setTitle(e.target.value)}
          />
          <button className="border p-1" type="submit">Submit</button>
        </form>
      </div>
    );
}

export default FormInput;