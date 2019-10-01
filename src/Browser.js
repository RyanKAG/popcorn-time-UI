import React, { Component } from 'react'
import API from './API';
import Movie from './Movie.js';
import './Browser.css';

export class Browser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        this.getMovies();
    }

    async getMovies() {
        let mvz = await API.discoverMovies();
        this.setState({ movies: mvz })
    }

    likeMovie = (id) => {
        this.setState(crt => ({
            movies: crt.movies.map((mv) => ({
                ...mv,
                liked: mv.id === id ? !mv.liked : mv.liked,
            }))
        }));
    }

    seeMovie = (id) => {
        this.setState(crt => ({
            movies: crt.movies.map((mv) => ({
                ...mv,
                seen: mv.id === id ? !mv.seen : mv.seen,
            }))
        }));
    }

    render() {
        return (
            <div className="item-container">
                {this.state.movies.map((mv) => (
                    <Movie className='flex-item'
                        key={mv.id}
                        id={mv.id}
                        seen={mv.seen}
                        seeMovie={this.seeMovie}
                        isLiked={mv.liked}
                        likeMovie={this.likeMovie}
                        title={mv.title}
                        popularity={mv.vote_count}
                        img={API.getPoster(mv.poster_path)}
                        year={mv.release_date}
                        rating={mv.vote_count}
                    />
                ))}
            </div>
        )
    }
}

export default Browser
