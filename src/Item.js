import React, { Component } from 'react'
import './Item.css';
import ItemActions from './ItemActions';

export class Item extends Component {
    static defaultProps = {
        img: null,
        title: "",
        rating: "",
        year: ""
    };

    constructor(props) {
        super(props);
        this.state = {
            isHovering: false,
        };
    }

    handleLeave = (evt) => this.setState({ isHovering: false });


    handleEnter = (evt) => this.setState({ isHovering: true });


    likeItem = () => this.props.likeItem(this.props.id);


    seeItem = () => this.props.seeItem(this.props.id);


    render() {
        let isLoaded = this.props.img !== null;
        let style = { backgroundImage: `url('${this.props.img}')` };
        return (
            <li value={this.props.popularity} className='item'>
                <div className='poster'>
                    {isLoaded ?
                        <div
                            className="mv"
                            style={style}
                            onMouseEnter={this.handleEnter}
                            onMouseLeave={this.handleLeave}>

                            <ItemActions
                                seeItem={this.seeItem}
                                seen={this.props.seen}
                                isLiked={this.props.isLiked}
                                likeItem={this.likeItem}
                                popularity={this.props.popularity}
                                isHovering={this.state.isHovering} />
                        </div>
                        : <div className='gradient' />}
                </div>
                <p className='details title'>{this.props.title}</p>
                <p className='details year'>{this.props.year.substring(0, 4)}</p>
            </li>
        )
    }
}

export default Item
