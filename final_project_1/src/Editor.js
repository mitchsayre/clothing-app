import React from 'react'
import './Editor.css'

const Item = ({ type }) => {
    return (
        <div className={`Item ${type}`}>

        </div>
    )
}

const Editor = () => {
    return (
        <div className="Editor">
            <div className="editorContainer">
                <Item type="head" />
                <Item type="torso" />
                <Item type="legs" />
                <Item type="feet" />
            </div>
        </div>
    )
}

export default Editor