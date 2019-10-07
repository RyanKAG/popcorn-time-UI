import React, { Component } from 'react'
import './NavBar.css'
export class NavBar extends Component {
    render() {
        return (
            <header >
                <div className='container'>
                    <nav>
                        <ul>
                            <li><a>Movie</a></li>
                            <li><a>Series</a></li>
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
