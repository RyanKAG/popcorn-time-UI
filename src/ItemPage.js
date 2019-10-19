import React, { Component } from 'react'
import API from './API';

import './ItemPage.css';
import imdb from './assets/imdb.png'
export class ItemPage extends Component {



    render() {
        console.log(imdb);
        return (
            <div className='item-page'>
                <section className='item-info'>
                    <div className='poster' style={{backgroundImage: `url(${API.getPoster(this.props.path, 154)})`}}/>
                    <div className='item-details'>
                        <h2>{this.props.title}</h2> 
                        <div className='item-tags'>
                            <div className='year'>{this.props.year}</div>
                            <span className='separator'>|</span>
                            <div className='duration'>{this.props.duration}</div>
                            <span className='separator'>|</span>
                            <div className='imdb'/>
                        </div>
                        <p>{this.props.plot}</p>
                    </div>
                </section>

                <section className='item-content' >

                </section>
            </div>
        )
    }
}

export default ItemPage
