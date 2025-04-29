import React, { useState } from "react";
import { loadNotes, saveNotes } from "../utils/storage";
import { v4 as uuidv4 } from "uuid";

export default function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { id: uuidv4(), title, content };
    const existing = loadNotes();
    const updated = [...existing, newNote];
    saveNotes(updated);
    setTitle("");
    setContent("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Note</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Content"
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">
          Save Note
        </button>
      </form>
    </div>
  );
}
