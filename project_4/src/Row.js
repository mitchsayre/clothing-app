import React from 'react'
import Item from './Item'


// const Row = ({children}) => {
//     const mapRow = React.children.map(children,  => {
//     return ()
// }

//     return (
//         <div className="Row">
//             {mapRow}
//         </div>
//     )

// }

function Row({children}) {
    const listItems = React.Children.map( children, () => {
    const randomImg = getImgUrl() 
    return (
        <Item url={randomImg}/>
    )
})
    return (
        <div className="Row">
            {listItems}
        </div>
    )
}

function getImgUrl() {
    const randomNumber = Math.floor(Math.random() * 4 )
    if (randomNumber === 0) {return "./blue.png"} 
    else if (randomNumber === 1) {return "./green.png"}
    else if (randomNumber === 2) {return "./lightblue.png"} 
    else {return "./orange.png"}
}

export default Row