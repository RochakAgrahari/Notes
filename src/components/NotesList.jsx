import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import EditModal from "./EditModal";
import { loadNotes, saveNotes } from "../utils/storage";

export default function NotesList() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    const stored = loadNotes();
    setNotes(stored);
  }, []);

  const handleDelete = (id) => {
    const filtered = notes.filter((n) => n.id !== id);
    saveNotes(filtered);
    setNotes(filtered);
  };

  const handleEdit = (note) => {
    setEditingNote(note);
  };

  const handleSave = (updatedNote) => {
    const updated = notes.map((n) => (n.id === updatedNote.id ? updatedNote : n));
    saveNotes(updated);
    setNotes(updated);
    setEditingNote(null);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Notes</h1>
      {notes.length === 0 ? (
        <p className="text-gray-600">No notes found.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}

      <EditModal
        isOpen={!!editingNote}
        note={editingNote}
        onClose={() => setEditingNote(null)}
        onSave={handleSave}
      />
    </div>
  );
}