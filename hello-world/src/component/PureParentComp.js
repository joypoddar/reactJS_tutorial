import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
// import PureComp from './PureComp'
// import RegComp from './RegComp'

class PureParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Joy'
        }
    }

    componentDidMount () {
        setInterval(() =>{
            this.setState ({
                name: 'Joy'
            })
        }, 2000)
    }
    

    render() {
        console.log('*********Parent Component Render*********')
        return (
            <div>
                Parent Component
                <MemoComponent name = {this.state.name}/>
                {/* <RegComp name={this.state.name}/> */}
                {/* <PureComp name= {this.state.name}/> */}
            </div>
        )
    }
}

export default PureParentComp
