import React, { Component } from 'react'
import API from '../api/API';
import Item from './Item.js';
import { Switch, Route } from 'react-router-dom';
import '../style/Browser.css';
import NavBar from "./NavBar";

export class Browser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        this.getItems(API.path.movies);
    }

    browse = (path) => this.getItems(path);

    async getItems(path) {
        console.log('called');
        let mvz = await API.requestApi(path);
        this.setState({ items: mvz })
    }

    likeItem = (id) => {
        this.setState(crt => ({
            items: crt.items.map((mv) => ({
                ...mv,
                liked: mv.id === id ? !mv.liked : mv.liked,
            }))
        }));
    };

    seeItem = (id) => {
        this.setState(crt => ({
            items: crt.items.map((mv) => ({
                ...mv,
                seen: mv.id === id ? !mv.seen : mv.seen,
            }))
        }));
    };

    render() {
        return (
            <div>
                <NavBar browse={this.browse} />
                <Switch>
                    <Route exact path='/movie' render={() =>
                        <ol className="item-container" reversed={true}>
                            {this.state.items.map((mv) => (
                                <Item
                                    className='flex-item'
                                    key={mv.id}
                                    id={mv.id}
                                    seen={mv.seen}
                                    seeItem={this.seeItem}
                                    isLiked={mv.liked}
                                    likeItem={this.likeItem}
                                    title={mv.title}
                                    popularity={mv.vote_count}
                                    img={API.getPoster(mv.poster_path)}
                                    year={mv.release_date}
                                    rating={mv.vote_count}
                                />
                            ))}
                        </ol>} />
                </Switch>
            </div>
        )
    }
}

export default Browser
