import React from 'react'
import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNotetext] = useState('');
    const characterLimit = 200

    const handleChange = (event) => {
      if (characterLimit - event.target.value.length >= 0){
        setNotetext(event.target.value)
      }
        
    }

    const handleSave = () => {
      if(noteText.trim().length > 0){
        handleAddNote(noteText)
        setNotetext('');
      }
    }

  return (
    <div className='note new-note'>
        <textarea 
        rows="8" 
        cols="10" 
        placeholder="type to add a note..."
        value={noteText}
        
        onChange={handleChange}

        ></textarea>

        <div className='note-footer'>
            <small>{characterLimit - noteText.length} Remaining</small>
            <button className='save' onClick={handleSave}>Save</button>
        </div>
    </div>
  )
}

export default AddNote