import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddNote from "./pages/AddNote";
import NotesList from "./components/NotesList";

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between">
        <h1 className="font-bold text-lg">NoteApp</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">View Notes</Link>
          <Link to="/add" className="hover:underline">Add Note</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="/add" element={<AddNote />} />
      </Routes>
    </Router>
  );
}

export default App;
