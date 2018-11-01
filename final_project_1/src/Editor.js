import React from 'react'
import CloseButton from './CloseButton'
import './Editor.css'

const Editor = ({ outfit, type, setOutfitFromLibrary, removeThing }) => {
    return (
        <div className={`Editor ${type}`} onClick={(setOutfitFromLibrary === null) ? ()=>{} : () => setOutfitFromLibrary(outfit)}>
            <div className="editorContainer">
                <div className="item head">
                    <img className="itemImage" src={outfit.head.url} alt={outfit.head.name} />
                    <CloseButton removeThing={removeThing} thingBeingRemoved="head"/>
                </div>
                <div className="item torso">
                    <img className="itemImage" src={outfit.torso.url} alt={outfit.torso.name} />
                    <CloseButton removeThing={removeThing} thingBeingRemoved="torso"/>
                </div>
                <div className="item legs">
                    <img className="itemImage" src={outfit.legs.url} alt={outfit.legs.name} />
                    <CloseButton removeThing={removeThing} thingBeingRemoved="legs"/>
                </div>
                <div className="item feet">
                    <img className="itemImage" src={outfit.feet.url} alt={outfit.feet.name} />
                    <CloseButton removeThing={removeThing} thingBeingRemoved="feet"/>
                </div>
            </div>
        </div>
    )
}

export default Editor