import NotesList from "./components/NotesList"
import Search from "./components/Search";
import Header from "./components/Header";
import { useState, useEffect } from "react"
import { nanoid } from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is a note",
      date: "17/08/2023",
    },
  ]) 

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('notes-app-data')
    );

    if(savedNotes){
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {

    localStorage.setItem(
      'notes-app-data', 
      JSON.stringify(notes)
    );

  }, [notes]) ;

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggle={setDarkMode}/> 
        <Search handleSearchNote={setSearchText} />
        <NotesList 
          notes={notes.filter((note) => 
            note.text.toLowerCase().includes(searchText)
          )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
}

export default App