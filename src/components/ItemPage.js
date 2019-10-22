import React, { Component } from 'react'
import API from '../api/API';
import '../style/ItemPage.css';
import imdb from '../assets/imdb.png'
export class ItemPage extends Component {



    render() {
        let img = new Image();
        let img2 = new Image();
        img.src = API.getPosterW(this.props.path, 500);
        console.log(imdb);
        return (
            <div className='item-page'>
                <section className='item-header' >
                    <div className='item-cover' >
                        <div className='item-cover-img' style={{ backgroundImage: `url(${img.src})` }} />
                    </div>
                    <div className='item-poster'>
                        <div className='item-img' style={{ backgroundImage: `url(${img.src})` }}/>
                    </div>
                    <div className='item-metadata'>
                        <h2>John Wick</h2>
                        <div className='item-infos'>
                            <div className='year'>2009</div>
                            <span className='separator'>|</span>
                            <div className='duration'>2.4h</div>
                            <span className='separator'>|</span>
                            <div className='genres'>action/comedy/sci-fi/sex</div>
                            <div className='imdb' />
                        </div>
                    </div>
                </section>

                <section className='item-content' >

                </section>
            </div>
        )
    }
}

export default ItemPage
