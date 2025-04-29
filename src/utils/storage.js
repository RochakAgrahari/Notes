export const STORAGE_KEY = "custom_notes";

export function loadNotes() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}


