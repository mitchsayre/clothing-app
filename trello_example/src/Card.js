import React from 'react'
import propTypes from 'prop-types'

const Card = ({ cards }) => {
    return (
        <div className="Card">
        <h1>{cards.title}</h1>
            <ul>
                {cards.items.map(cardItem => (
                    <li>{cardItem.item}</li>
                ))}
            </ul>
        </div>
    )
}

    Card.propTypes = {
        cards: propTypes.object.isRequired
    }

    export default Card