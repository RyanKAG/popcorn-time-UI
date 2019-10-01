import React, { Component } from 'react'
import './Movie.css';
import MovieActions from './MovieActions';

export class Movie extends Component {
    static defaultProps = {
        img: null,
        title: "",
        rating: "",
        year: ""
    }

    constructor(props) {
        super(props);
        this.state = {
            isHovering: false,
        };
    }

    handleLeave = (evt) => this.setState({ isHovering: false })


    handleEnter = (evt) => this.setState({ isHovering: true })


    likeMovie = () => this.props.likeMovie(this.props.id)


    seeMovie = () => this.props.seeMovie(this.props.id)


    render() {
        let isLoaded = this.props.img !== null;
        let style = { backgroundImage: `url('${this.props.img}')` };
        return (
            <li className='item'>
                <div className='poster'>
                    {isLoaded ?
                        <div
                            className="mv"
                            style={style}
                            onMouseEnter={this.handleEnter}
                            onMouseLeave={this.handleLeave}>

                            <MovieActions
                                seeMovie={this.seeMovie}
                                seen={this.props.seen}
                                isLiked={this.props.isLiked}
                                likeMovie={this.likeMovie}
                                popularity={this.props.popularity}
                                isHovering={this.state.isHovering ? true : false} />

                        </div>
                        : <div className='gradient' />}
                </div>
                <p className='details title'>{this.props.title}</p>
                <p className='details year'>{this.props.year.substring(0, 4)}</p>
            </li>
        )
    }
}

export default Movie
