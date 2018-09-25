import React from 'react'
import Row from './Row'
import Item from './Item'

const GameBoard = () => {
    return (
        <div className="GameBoard">
            <Row>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Row>
            <Row>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Row>
            <Row>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Row>
            <Row>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Row>
        </div>
    )
}

export default GameBoard