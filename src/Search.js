import React from 'react'
import './Search.css'

const Search = (props) => {
    return (
        <div className="Search">
            <div className="clothesContainer">
            hats
                {props.hats.map((item) => <div key={item.id} className="clothingItem" onClick={() => props.updateCurrentOutfit(item)}><img className="itemImage" src={item.url} alt={item.name} /></div>)}
            </div>
            <div className="clothesContainer">
            shirts
                {props.shirts.map((item) => <div key={item.id} className="clothingItem" onClick={() => props.updateCurrentOutfit(item)}><img className="itemImage" src={item.url} alt={item.name} /></div>)}
            </div>
            <div className="clothesContainer">
            pants
                {props.pants.map((item) => <div key={item.id} className="clothingItem" onClick={()=> props.updateCurrentOutfit(item)}><img className="itemImage" src={item.url} alt={item.name} /></div>)}
            </div>
            <div className="clothesContainer">
            shoes
                {props.shoes.map((item) => <div key={item.id} className="clothingItem" onClick={()=> props.updateCurrentOutfit(item)}><img className="itemImage" src={item.url} alt={item.name} /></div>)}
            </div>
        </div>
    )
}

export default Search