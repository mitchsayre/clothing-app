import React from 'react'

class ControlledInput extends React.Component {
    state = { text: '' }
    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    render() {
        return (
            <input type="text"
                value={this.state.text}
                onChange={this.handleChange} />
        )
    }
    // class MyList extends React.Component {
    //     render() {
    //         return (<p></p>);
    //     }
    // }
}



export default ControlledInput
// export {MyList}


