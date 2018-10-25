import React from 'react'
import './Search.css'

const Search = (props) => {
    return (
        <div className="Search">
            <div className="clothesContainer">
                {props.hats.map((item) => <div className="clothingItem" onClick={props.callBack.bind(null, item)}>{item.name}</div>)}
            </div>
            <div className="clothesContainer">
                {props.shirts.map((item) => <div className="clothingItem" onClick={props.callBack.bind(null, item)}>{item.name}</div>)}
            </div>
            <div className="clothesContainer">
                {props.pants.map((item) => <div className="clothingItem" onClick={props.callBack.bind(null, item)}>{item.name}</div>)}
            </div>
            <div className="clothesContainer">
                {props.shoes.map((item) => <div className="clothingItem" onClick={props.callBack.bind(null, item)}>{item.name}</div>)}
            </div>
        </div>
    )
}

export default Search