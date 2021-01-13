import React, {Component} from 'react';
import axios from 'axios';
import "./gifCode.css";

class GifCode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            criteria: "cat",
            data: [],
            url: "http://api.giphy.com/v1/gifs/trending?api_key=PnJX2QUWawKbwYLC0n8Q0GxbM7jZdIX8"
        };
    }

    handleInput =(event) =>{
        this.setState({
            criteria: event.target.value
        })
    }    

    handleChange = (event) => {
        event.preventDefault();
        this.setState(current => ({
            url:`https://api.giphy.com/v1/gifs/search?api_key=PnJX2QUWawKbwYLC0n8Q0GxbM7jZdIX8&q=${current.criteria}`
        })        
    )
}

    componentDidMount = () => {
        axios.get(this.state.url)
            .then(response => {
                const newData = response.data.data;
                this.setState({data: newData});
                
            })
            .catch(err => console.log(err));
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.url !== this.state.url) {
            this.componentDidMount();
        }
    }

    render() {
        return (
            <>
                <form>
                    Enter Anything <br/>
                    <input type="text" name="criteria" onChange={this.handleInput}/>
                    <button onClick={this.handleChange}>send</button>
                </form>                
                {this.state.data.map(data =>
                
                    <div key={data.id} className="gif">
                        <GifCodeCard image={data.images.original.url}/>
                    </div>
                )}
            </>
        );
    }
};

class GifCodeCard extends Component {

    render() {
        return(
            <div className="gifCard">
                <img src={this.props.image} alt="gif from ghipy api" />
            </div>
        );
    }
};

export default GifCode;