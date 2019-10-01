import React, { Component } from 'react'
import './MovieActions.css';
export class MovieActions extends Component {
    static defaultProps = {
        isHovering: false,
        isLiked: false,
        seem: false,
        popularity: "N/A",
    };

    handleLikeButton = () => this.props.likeMovie()

    handleSeenButton = () => this.props.seeMovie();

    render() {
        let isHovering = this.props.isHovering;

        let movieActions =
            <div className="actions">
                <div className="actions-container">
                    <div className="actions-row">
                        <i onClick={this.handleSeenButton}
                            className={`far fa-eye ${this.props.seen ? 'left-icon' : ''}`} />
                        <i onClick={this.handleLikeButton}
                            className={`fas fa-heart ${this.props.isLiked ? 'right-icon' : ''}`} />
                    </div>
                    <div className="bottom actions-row">
                        <div className='popularity'>
                            <i className="fas fa-fire bottom-icon" />
                            <p>{this.props.popularity}</p>
                        </div>
                    </div>
                </div>
            </div>;

        return isHovering ? movieActions : <div></div>;
    }
}

export default MovieActions;
