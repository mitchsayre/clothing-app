import React, { Component } from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

class GameBoard extends Component {
state = {
    board:{}
}
    constructor(props) {
        super(props)
        // I dont understand constructor and super
        var myBoard = Array(20).fill(0)
        myBoard = myBoard.map(index => { return this.urlGenerator() })
        console.log(myBoard)
        this.state = { board: myBoard }
    }
    writeItem(arraySquareIndex) {
        return (this.state.board[arraySquareIndex])
    }

    cHandler(arraySquareIndex, urlGenerator) {
        console.log(this.state)
        const tempBoard = this.state.board
        tempBoard[arraySquareIndex] = urlGenerator
        this.setState({ board: tempBoard })
    }

    urlGenerator() {
        const randomNumber = Math.floor(Math.random() * 4)
        if (randomNumber === 0) { return "./blue.png" }
        else if (randomNumber === 1) { return "./green.png" }
        else if (randomNumber === 2) { return "./lightblue.png" }
        else { return "./orange.png" }
    }

    render() {
        return (
            <div className="GameBoard">
                <div className="row">
                    <Item url={this.writeItem(0)} clickHandler={this.cHandler.bind(this, 0, this.urlGenerator())} />
                    <Item url={this.writeItem(1)} clickHandler={this.cHandler.bind(this, 1, this.urlGenerator())}/>
                    <Item url={this.writeItem(2)} clickHandler={this.cHandler.bind(this, 2, this.urlGenerator())}/>
                    <Item url={this.writeItem(3)} clickHandler={this.cHandler.bind(this, 3, this.urlGenerator())}/>
                    <Item url={this.writeItem(4)} clickHandler={this.cHandler.bind(this, 4, this.urlGenerator())}/>
                </div>
                <div className="row">
                    <Item url={this.writeItem(5)} clickHandler={this.cHandler.bind(this, 5, this.urlGenerator())}/>
                    <Item url={this.writeItem(6)} clickHandler={this.cHandler.bind(this, 6, this.urlGenerator())}/>
                    <Item url={this.writeItem(7)} clickHandler={this.cHandler.bind(this, 7, this.urlGenerator())}/>
                    <Item url={this.writeItem(8)} clickHandler={this.cHandler.bind(this, 8, this.urlGenerator())}/>
                    <Item url={this.writeItem(9)} clickHandler={this.cHandler.bind(this, 9, this.urlGenerator())}/>
                </div>
                <div className="row">
                    <Item url={this.writeItem(10)} clickHandler={this.cHandler.bind(this, 10, this.urlGenerator())}/>
                    <Item url={this.writeItem(11)} clickHandler={this.cHandler.bind(this, 11, this.urlGenerator())}/>
                    <Item url={this.writeItem(12)} clickHandler={this.cHandler.bind(this, 12, this.urlGenerator())}/>
                    <Item url={this.writeItem(13)} clickHandler={this.cHandler.bind(this, 13, this.urlGenerator())}/>
                    <Item url={this.writeItem(14)} clickHandler={this.cHandler.bind(this, 14, this.urlGenerator())}/>
                </div>
                <div className="row">
                    <Item url={this.writeItem(15)} clickHandler={this.cHandler.bind(this, 15, this.urlGenerator())}/>
                    <Item url={this.writeItem(16)} clickHandler={this.cHandler.bind(this, 16, this.urlGenerator())}/>
                    <Item url={this.writeItem(17)} clickHandler={this.cHandler.bind(this, 17, this.urlGenerator())}/>
                    <Item url={this.writeItem(18)} clickHandler={this.cHandler.bind(this, 18, this.urlGenerator())}/>
                    <Item url={this.writeItem(19)} clickHandler={this.cHandler.bind(this, 19, this.urlGenerator())}/>
                </div>
            </div>
        )
    }
}

Item.PropTypes = {
    arraySquare: PropTypes.number.isRequired
}

export default GameBoard
