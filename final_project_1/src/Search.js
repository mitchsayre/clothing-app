import React from 'react'
import './Search.css'

const Search = (props) => {
    console.log(props.hats)
    console.log(props.shirts)
    console.log(props.pants)
    console.log(props.shoes)
    return (
        <div className="Search">
            <div className="clothesContainer">
                {props.hats.map((item) => <div className="clothingItem">{item.name}</div>)}
            </div>
            <div className="clothesContainer">
                {props.shirts.map((item) => <div className="clothingItem">{item.name}</div>)}
            </div>
            <div className="clothesContainer">
                {props.pants.map((item) => <div className="clothingItem">{item.name}</div>)}
            </div>
            <div className="clothesContainer">
                {props.shoes.map((item) => <div className="clothingItem">{item.name}</div>)}
            </div>
        </div>
    )
}

export default Search