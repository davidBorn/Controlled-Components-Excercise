import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormOutput from './FormOutput';

class App extends Component {
  state = {
    text: '',
  }
  handleChange = (query) => {
    this.setState(currState => ({
      text: query,
    }))
    return this.state.text;
  }
render () {
	return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
		<input type="text" placeholder="Say Something" onChange={(event) => this.handleChange(event.target.value)}/>
		<FormOutput currentText={this.state.text}/>
        </div>
      </div>
    );


  }
}

export default App;
