import React, { Component } from 'react'
import axios from 'axios';
import News from './News'

export class DisplayEvents extends Component {
    state = {
        events:[]
    }
    componentDidMount(){
        axios.get("api/news/")
        .then(res => {
            const news = res.data
            this.setState({news})
        })
    }
    render() {
        return (
            <section className="section" style={{textAlign:"center"}}>
                <h1 className="is-1 title">Upcoming Events</h1>
                <div className="columns is-multiline">
                    {
                        this.state.news.map(news_item =>(
                            <News key={news_item.id} news={news_item}/>
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default DisplayEvents