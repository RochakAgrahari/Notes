import React from "react";

export default function NoteCard({ note, onDelete, onEdit }) {
  return (
    <div className="bg-white shadow-lg p-4 rounded-xl border hover:shadow-xl transition">
      <h2 className="text-xl font-semibold text-gray-800">{note.title}</h2>
      <p className="text-gray-600 mt-2 whitespace-pre-wrap">{note.content.slice(0, 100)}...</p>
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => onEdit(note)}
          className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="px-4 py-1 rounded bg-red-600 text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}