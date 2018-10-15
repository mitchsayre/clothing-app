import React from 'react'
import PropTypes from 'prop-types'

const Item = ({url, clickHandler}) => {
    return (
        <div className="Item" onClick={clickHandler}>
            <img src={url}/>
        </div>
    )
}

Item.PropTypes = {
    url: PropTypes.string.isRequired
}

export default Item