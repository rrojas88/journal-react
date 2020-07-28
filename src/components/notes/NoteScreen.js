
import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">


            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    
                ></textarea>

                {/*
                    (note.url) 
                    && (
                        <div className="notes__image">
                            <img 
                                src={ note.url }
                                alt="imagen"
                            />
                        </div>
                    )
                */}
                <div className="notes__image">
                            <img 
                                src="https://vignette.wikia.nocookie.net/transformerscinematicuniverse6050/images/d/de/Scorponok.jpg/revision/latest/top-crop/width/360/height/450?cb=20170615030924&path-prefix=es"
                                alt="imagen"
                            />
                        </div>


            </div>


            <button 
                className="btn btn-danger"
                
            >
                Delete
            </button>

        </div>
    )
}
