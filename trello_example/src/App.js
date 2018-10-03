import React, { Component } from 'react'
import './App.css'
import Card from './Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card cards={card1} />
        <Card cards={card2} />
        <Card cards={card3} />
      </div>
    )
  }
}

const card1 = {
  title: 'Title of list 1',
  items: [
    { item: 'to do 1' },
    { item: 'to do 2' },
    { item: 'to do 3' },
    { item: 'to do 4' },
  ]
}

const card2 = {

  title: 'Title of list 2',
  items: [
    { item: 'to do 5' },
    { item: 'to do 6' },
    { item: 'to do 7' },
    { item: 'to do 8' },
  ]
}

const card3 =
{
  title: 'Title of list 3',
  items: [
    { item: 'to do 9' },
    { item: 'to do 10' },
    { item: 'to do 11' },
    { item: 'to do 12' },
  ]
}
export default App
