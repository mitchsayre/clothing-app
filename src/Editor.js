import React from 'react'
import CloseButton from './CloseButton'
import './Editor.css'

const Editor = ({ outfit, type, setOutfitFromLibrary, removeThing, removeOutfit }) => {
    const checkForCloseButton = (typeOfThing) => {
        if (type === 'large') {
        return (
            <CloseButton removeThing={removeThing} thingBeingRemoved={typeOfThing} />
        )}}
    const checkForCloseOutfit = (editorType) => {
        console.log(editorType)
        if (editorType === 'mini') {
            console.log(outfit)
            return (
                <CloseButton removeThing={removeOutfit} thingBeingRemoved={outfit} />     
            )
        }
    
    }
    return (
        <div className={`Editor ${type}`} >
            <div className="editorContainer" onClick={(setOutfitFromLibrary === null) ? () => { } : () => setOutfitFromLibrary(outfit)}>
                <div className="item head">
                    <img className="itemImage" src={outfit.head.url} alt={outfit.head.name} />
                    {checkForCloseButton('head')}
                </div>
                <div className="item torso">
                    <img className="itemImage" src={outfit.torso.url} alt={outfit.torso.name} />
                    {checkForCloseButton('torso')}
                </div>
                <div className="item legs">
                    <img className="itemImage" src={outfit.legs.url} alt={outfit.legs.name} />
                    {checkForCloseButton('legs')}
                </div>
                <div className="item feet">
                    <img className="itemImage" src={outfit.feet.url} alt={outfit.feet.name} />
                    {checkForCloseButton('feet')}
                </div>
            </div>
            {checkForCloseOutfit(type)}
        </div>
    )
}


export default Editor