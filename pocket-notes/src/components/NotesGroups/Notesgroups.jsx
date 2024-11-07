import React from 'react'
import styleNotesGroups from "./NotesGroups.module.css"
const Notesgroups = () => {
  return (
    <div>
      <div className={styleNotesGroups.container}>
      <h1>Pocket Notes</h1>
      <button>+</button>
      </div>
    </div>
  )
}

export default Notesgroups;
