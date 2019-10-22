import React, { Component } from 'react'
import '../style/ItemActions.css';
export class ItemActions extends Component {
    static defaultProps = {
        isHovering: false,
        isLiked: false,
        seem: false,
        popularity: "N/A",
    };

    handleLikeButton = () => this.props.likeItem();

    handleSeenButton = () => this.props.seeItem();

    render() {
        let isHovering = this.props.isHovering;

        let ItemActions =
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

        return isHovering ? ItemActions : <div></div>;
    }
}

export default ItemActions;
