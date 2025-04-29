# 📝 Custom Note Service (Frontend Mini Project)

This is a lightweight, responsive React-based note-taking app that allows users to **add**, **edit**, **delete**, and **view** notes using `localStorage`—no backend required. Designed as a 2-hour mini-project with a focus on clear UI, component modularity, and simple state management.

## 🚀 Live Demo
[Live Site](https://app.netlify.com/sites/spectacular-cocada-827489/overview)

## 📂 GitHub Repo
[GitHub Repository](https://github.com/RochakAgrahari/Notes)

---

## 📦 Tech Stack

- **React**
- **React Router DOM**
- **Tailwind CSS**
- **UUID** (for unique note IDs)
- **LocalStorage API**

---

## 🛠️ Setup & Run Locally

```bash
git clone https://github.com/your-username/custom-note-service
cd custom-note-service
npm install
npm run dev

❓ “Why?” Documentation
Storage Strategy
Why localStorage + key naming: LocalStorage allows persistent, client-side storage without requiring a backend. We used a key like "notes-app-data" to avoid collisions with other potential data in localStorage.

Component Design
AddNote.jsx: Manages form inputs using useState and handles note submission.

// Why I chose useState + this submit handler: useState provides real-time input tracking; the handler ensures data sync with UI and localStorage.

NotesList.jsx: Loads notes once on mount and renders dynamic UI.

// Why useEffect to sync storage → state: To load data once and avoid unnecessary re-renders or infinite loops.

State Management
Local state (useState) for notes and modals because the app’s scale is small, and no global state or complex state transitions were needed.

Styling
Tailwind CSS for rapid utility styling: Tailwind allows for quick layout and spacing adjustments without needing separate stylesheets or class definitions.

Navigation
Minimal button-based tab navigation:

// Why this nav approach for simplicity: Tabs are lightweight, improve UX, and require minimal setup in React Router.

Error & Loading States
// Why show spinner here: Indicates a write operation is in progress to avoid confusion on slow devices.

// Why display error banner: Warns the user if saving fails (e.g., storage full), improving reliability and transparency.
