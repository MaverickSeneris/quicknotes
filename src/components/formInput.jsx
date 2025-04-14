import { useState } from "react";
import generateId from "../utils/generateId";

// FormInput handles the creation of new notes
function FormInput({ isDark, addNewNote }) {
  const [title, setTitle] = useState(""); // Stores the input field value

  // Handles the form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload
    if (!title.trim()) return; // Prevent empty notes

    const newNote = {
      id: generateId(), // Generate unique ID
      name: title, // Note content
      isDone: false, // Default state: not done
      isEditing: false, // Default state: not editing
    };

    addNewNote(newNote); // Call parent function to add the note
    setTitle(""); // Clear input
  }

  return (
    <div>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          className={`border border-black ${isDark && "border-white"} ${isDark && "text-white"} ${
            isDark && "placeholder-gray-400"
          } p-2 rounded-[10px] transition duration-200 ease-in-out hover:border-blue-500`}
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
