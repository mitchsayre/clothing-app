import React from 'react'
import './App.css'
import CountingParent from './CountingParent'
import ControlledInput from './ControlledInput'

class Page extends React.Component {
  render() {
    return (
      <div className="App">
        <CountingParent />
        <ControlledInput />
      </div>
    )
  }
}

export default Page
