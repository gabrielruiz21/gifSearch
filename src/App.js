import React, { Component } from 'react';
import './App.css';
import GifSearch from './Components/GifSearch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Gifs Search</h2>
        </div>
        <GifSearch/>
      </div>
    );
  }
}

export default App;
