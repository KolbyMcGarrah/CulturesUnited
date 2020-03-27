import React, { Component } from 'react'
import EmailListForm from "./EmailListForm"

export class EmailList extends Component {
    render() {
        return (
            <div className="container" style={{marginBottom:"20px",textAlign:"center"}}>
                    <h1>Subscribe to our email list to get all updates from the club.</h1>
                    <EmailListForm />
            </div>
        )
    }
}

export default EmailList
