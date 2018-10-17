import React, { Component } from 'react'
import ControlBar from './ControlBar'
import Editor from './Editor'
import Search from './Search'

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <ControlBar />
                <Editor />
                <Search />
            </div>
        )
    }
}

export default Main