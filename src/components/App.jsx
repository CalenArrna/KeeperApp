import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import noteList from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      <dl>{noteList.map(note => <Note key={note.key} title={note.title} content={note.content}/>)}</dl>
      <Footer />
    </div>
  );
}

export default App;
