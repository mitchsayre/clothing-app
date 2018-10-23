import React from 'react'

const Search = (props) => {
    console.log(props.hats)
    console.log(props.shirts)
    console.log(props.pants)
    console.log(props.shoes)
    return (
        <div className="Search">
            <div className="hats">
                {props.hats.map((item) => item.name)}
            </div>
            <div className="shirts">
                {props.shirts.map((item) => item.name)}
            </div>
            <div className="pants">
                {props.shirts.map((item) => item.name)}
            </div>
            <div className="shoes">
                {props.shoes.map((item) => item.name)}
            </div>
        </div>
    )
}

// {data.this.shirts.map((number) =>
//     <p key={number.name}>
//         value={number.name} </p>

// )}

export default Search