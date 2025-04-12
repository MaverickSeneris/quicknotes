import { useState } from "react";
import generateId from "../utils/generateId";

function FormInput({ addNewNote }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    const newNote = {
      id: generateId(),
      name: title,
      isDone: false,
      isEditing: false,
    };
    addNewNote(newNote);
    setTitle("");
  }
  return (
    <div>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          className="border p-1 rounded-[10px] transition duration-200 ease-in-out hover:border-blue-500 "
          type="text"
          placeholder="enter notes"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="cursor-pointer bg-green-500 hover:bg-green-600 active:scale-95 text-white px-4 py-2 rounded-[10px] transition duration-200"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormInput;
