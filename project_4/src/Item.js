import React from 'react'
import PropTypes from 'prop-types'

const Item = ({url}) => {
    return (
        <div className="Item">
            <img src={url}/>
        </div>
    )
}

Item.PropTypes = {
    url: PropTypes.string.isRequired
}

export default Item