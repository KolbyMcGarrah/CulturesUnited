import React, { Component } from 'react'
import axios from 'axios';
import Coach from './Coach'

export class DisplayCoaches extends Component {
    state = {
        coaches:[]
    }
    componentDidMount(){
        axios.get("api/coaches/")
        .then(res => {
            const coaches = res.data
            this.setState({coaches})
        })
    }
    render() {
        return (
            <section className="section container">
                    <h1 className="title is-1">Coahces</h1>
                    {
                        this.state.coaches.map(coach =>(
                            <Coach key={coach.id} coach={coach}/>
                        ))
                    }
            </section>
        )
    }
}

export default DisplayCoaches
