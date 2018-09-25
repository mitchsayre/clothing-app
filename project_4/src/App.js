import React, { Component } from 'react'
import './App.css'
import GameBoard from './GameBoard'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GameBoard />
        <Footer />
      </div>
    )
  }
}

export default App
