import React, { Component } from 'react'
import PropTypes from "prop-types";

export class News extends Component {
    static propTypes = {
        news: PropTypes.object.isRequired,
    }
    render() {
        return (
            <div className="container column is-8" style={{marginBottom:"20px"}}>
                <div className="card">
                    <header className="card-header" style={{textAlign:"center"}}>
                        <p className="card-header-title subtitle">{this.props.news.title} - <span className="subtitle">{this.props.news.subtitle}</span></p>
                    </header>
                    <div className="card-image">
                        <figure className="image">
                            <img className="" src={this.props.news.image}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <p>{this.props.news.description}</p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <p className="card-footer-item">Added on: {this.props.news.added_on}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
