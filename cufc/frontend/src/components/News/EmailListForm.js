import React, { Component } from 'react'

export class EmailListForm extends Component {
    render() {
        return (
            <div className="">
                <form className='columns is-multiline' style={{textAlign:"left",marginTop:"20px"}}>
                    <div className="field column is-8 is-offset-2">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input" />
                        </div>
                    </div> 

                    <div className="field column is-8 is-offset-2">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email input" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field column is-offset-8">
                        <button className="button is-primary">Subscribe</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EmailListForm
