import React, { Component } from 'react'
import Browser from './Browser'
import NavBar from './NavBar'
import './Window.css';
export class Window extends Component {
    render() {
        return (
            <div className="container">
                <Browser />
            </div>
        )
    }
}

export default Window
