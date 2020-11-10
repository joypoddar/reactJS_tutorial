import React, { Component } from 'react'
import Welcome from './Welcome'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        return (
            this.state.isLoggedIn && <div>Welcome Joy</div>
        )

        /* return (
            this.state.isLoggedIn ?
                <div>Welcome Joy</div> :
                <div>Hello Guest</div>
        ) */

        /* let message;
        if (this.state.isLoggedIn) {
            message = <div>Welcome Joy</div>
        }
        else {
            message = <div>Bonjour Guest</div>
        }

        return (<div>{message}</div>) */
        /* if (this.state.isLoggedIn) {
            return (
                <div>Welcome Joy</div>
            )
        }
        else {
            return (
                <div>Welcome Guest</div>
            )
        } */
        /* return (
            <div>
                <div>Welcome Joy</div>
                <div>Welcome Guest</div>  
            </div>
        ) */
    }
}

export default UserGreeting
