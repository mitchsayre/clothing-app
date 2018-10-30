import React from 'react'
import './Editor.css'

const Editor = ({outfit, type, key}) => {
    console.log(key)
    return (
        <div className={`Editor ${type}`} key={key}>
            <div className="editorContainer">
                <div className="item head">
                    <img className="itemImage" src={outfit.head.url} alt={outfit.head.name} />
                </div>
                <div className="item torso">
                    <img className="itemImage" src={outfit.torso.url} alt={outfit.torso.name} />
                </div>
                <div className="item legs">
                    <img className="itemImage" src={outfit.legs.url} alt={outfit.legs.name} />
                </div>
                <div className="item feet">
                    <img className="itemImage" src={outfit.feet.url} alt={outfit.feet.name} />
                </div>
            </div>
        </div>
    )
}

export default Editor