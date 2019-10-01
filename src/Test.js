import React, { Component } from 'react'
import axios from 'axios';
export class Test extends Component {
    async componentDidMount(){
        let response = await axios.get("http://omdbapi.com/?t=interstellar&apikey=6c7ddf71");
        console.log(response.data);
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Test
