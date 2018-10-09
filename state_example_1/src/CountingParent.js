import React from 'react'

class CountingParent extends React.Component {
    state = {
        actionCount: 0
    }
    handleAction = (action) => {
        // console.log('Child says', action)
        // actionCount is incremented, and
        // the new count replaces the existing one
        this.setState({
            actionCount: this.state.actionCount + 1
        })
    }
    // resetActionCount = () => {
    //     this.setState({
    //         actionCount: 0
    //     })
    // }
    render() {
        return (
            <div className="block">
                <Child onAction={this.handleAction} />
                <p>Clicked {this.state.actionCount} times</p>
                <button    
                    onClick={
                        () => {
                            this.setState({
                                actionCount: 0
                            })
                        }
                    }
                />
            </div>
        )
    }
}

function Child({ onAction }) {
    return (
        <button onClick={onAction}>
            Click Me!
        </button>
    )
}


export default CountingParent