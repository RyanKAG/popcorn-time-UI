import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import '../style/NavBar.css'
import API from '../api/API';

export class NavBar extends Component {
    handleMovieTab = () => this.props.browse(API.path.movies);
    handleTvTab = () => this.props.browse(API.path.tv);


    render() {
        return (
            <header >
                <div className='container'>
                    <nav>
                        <ul>
                            <li><NavLink activeClassName='active-link' className='navlink'to='/movie' onClick={this.handleMovieTab}>Movie</NavLink></li>
                            <li><NavLink activeClassName='active-link' className='navlink'to='/series' onClick={this.handleTvTab}>Series</NavLink></li>
                            <li><NavLink activeClassName='active-link' className='navlink'to='/anime'>Anime</NavLink></li>
                            <li><NavLink activeClassName='active-link' className='navlink'to='/indie'>Indie</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default NavBar
