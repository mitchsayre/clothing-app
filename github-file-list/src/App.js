import React, { Component } from 'react'
import './App.css'
import FileList from './FileList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FileList files={testFiles} />
      </div>
    )
  }
}

const testFiles = [
  {
      id: 1,
      name: 'src',
      type: 'folder',
      updated_at: "2016-07-11 21:24:00",
      latestCommit: {
          message: 'Initial commit'
      }
  },
  {
      id: 2,
      name: 'tests',
      type: 'folder',
      updated_at: "2016-07-11 21:24:00",
      latestCommit: {
          message: 'Initial commit'
      }
  }, {
      id: 3,
      name: 'README',
      type: 'file',
      updated_at: "2016-07-18 21:24:00",
      latestCommit: {
          message: 'Added a readme'
      }
  },
]

export default App
