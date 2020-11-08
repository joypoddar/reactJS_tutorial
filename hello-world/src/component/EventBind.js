import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this);
    }
    // clickHandler () {
    //     this.setState ({
    //         message: 'Bye'
    //     })
    // }

    clickHandler = () => {
        this.setState ({
            message: 'GoodBye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} {/* This is the first method of passing event handlers. This is expensive in large applications as it causes new event handlers whenever this is called */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */} {/* this also has performace implications */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
