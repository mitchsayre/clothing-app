import React from 'react'
import Editor from './Editor'

const ControlBar = ({ clearOutfit, saveOutfit, outfitLibrary }) => {
    return (
        <div className="ControlBar">
            ControlBar
            <button onClick={() => clearOutfit()}>clearOutfit</button>
            <button onClick={() => saveOutfit()}>saveOutfit</button>
            <div className="library">
                library
                {console.log(outfitLibrary)}
                {outfitLibrary.map(libraryItem => (
                    <Editor key={libraryItem.id} outfit={libraryItem} type="mini" />
                ))
                }
            </div>
        </div>
    )
}

export default ControlBar