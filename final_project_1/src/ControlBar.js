import React from 'react'
import Editor from './Editor'

const ControlBar = ({ clearOutfit, saveOutfit, outfitLibrary, setOutfitFromLibrary, removeThing }) => {
    return (
        <div className="ControlBar">
            ControlBar
            <button onClick={() => clearOutfit()}>clearOutfit</button>
            <button onClick={() => saveOutfit()}>saveOutfit</button>
            <div className="library">
                library
                {outfitLibrary.map(libraryItem => (
                    <Editor key={libraryItem.id} outfit={libraryItem} type="mini" removeThing={removeThing} setOutfitFromLibrary={setOutfitFromLibrary}/>
                ))
                }
            </div>
        </div>
    )
}

export default ControlBar