import React from 'react'
import './Search.css'

const Search = (props) => {
    return (
        <div className="Search">
            <div className="clothesContainer">
                {props.hats.map((item) => <div key={item.id} className="clothingItem" onClick={() => props.updateCurrentOutfit(item)}>{item.name}</div>)}
            </div>
            <div className="clothesContainer">
                {props.shirts.map((item) => <div key={item.id} className="clothingItem" onClick={() => props.updateCurrentOutfit(item)}>{item.name}</div>)}
            </div>
            <div className="clothesContainer">
                {props.pants.map((item) => <div key={item.id} className="clothingItem" onClick={()=> props.updateCurrentOutfit(item)}>{item.name}</div>)}
            </div>
            <div className="clothesContainer">
                {props.shoes.map((item) => <div key={item.id} className="clothingItem" onClick={()=> props.updateCurrentOutfit(item)}>{item.name}</div>)}
            </div>
        </div>
    )
}

export default Search