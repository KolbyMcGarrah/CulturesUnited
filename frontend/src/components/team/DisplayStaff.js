import React, { Component } from 'react'
import axios from 'axios';
import Staff from './Staff'

export class DisplayStaff extends Component {
    state = {
        staff:[]
    }
    componentDidMount(){
        axios.get("api/staff/")
        .then(res => {
            const staff = res.data
            this.setState({staff})
        })
    }
    render() {
        return (
            <section className="section container">
                    <h1 className="title is-1">Staff</h1>
                    {
                        this.state.staff.map(staff =>(
                            <Staff key={staff.id} staff={staff}/>
                        ))
                    }
            </section>
        )
    }
}

export default DisplayStaff
