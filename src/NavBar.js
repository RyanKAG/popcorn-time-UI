import React, {Component} from 'react'
import './NavBar.css'
import API from './API';

export class NavBar extends Component {
    handleMovieTab = () => this.props.browse(API.path.movies);
    handleTvTab = () => this.props.browse(API.path.tv);


    render() {
        return (
            <header >
                <div className='container'>
                    <nav>
                        <ul>
                            <li><a onClick={this.handleMovieTab}>Movie</a></li>
                            <li><a onClick={this.handleTvTab}>Series</a></li>
                            <li><a>Anime</a></li>
                            <li><a>Indie</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default NavBar
