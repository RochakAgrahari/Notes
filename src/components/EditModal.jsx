import React, { useState, useEffect } from "react";

export default function EditModal({ isOpen, onClose, note, onSave }) {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  useEffect(() => {
    setTitle(note?.title || "");
    setContent(note?.content || "");
  }, [note]);

  const handleSubmit = () => {
    onSave({ ...note, title, content });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Note</h2>
        <input
          className="w-full border p-2 rounded mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="5"
          className="w-full border p-2 rounded mb-3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-1 rounded bg-gray-300">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-1 rounded bg-green-600 text-white hover:bg-green-700">Save</button>
        </div>
      </div>
    </div>
  );
}
