import React from 'react'
import './Editor.css'

const Editor = (outfit) => {
    return (
        <div className="Editor">
            <div className="editorContainer">
                <div className="item head">
                    <img src={outfit.outfit.head.url} alt={outfit.outfit.head.name} />
                </div>
                <div className="item torso">
                    <img src={outfit.outfit.torso.url} alt={outfit.outfit.torso.name} />
                </div>
                <div className="item legs">
                    <img src={outfit.outfit.legs.url} alt={outfit.outfit.legs.name} />
                </div>
                <div className="item feet">
                    <img src={outfit.outfit.feet.url} alt={outfit.outfit.feet.name} />
                </div>
            </div>
        </div>
    )
}

export default Editor