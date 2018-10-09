import React, { Component } from 'react'
import Row from './Row'
import Item from './Item'

class GameBoard extends Component {
    render() {
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
}

export default GameBoard