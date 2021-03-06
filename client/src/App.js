import React, { Component } from 'react';
import './App.css';
import { Skeleton } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { skeletons: [] };
  }

  componentDidMount() {
    fetch('/skeletons')
      .then(res => res.json())
      .then(skeletons => this.setState({ skeletons }));
  }

  render() {
    const { state } = this;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Expreskeleton</h1>
        </header>
        <p className="App-intro">
          Expreskeleton is a walking skeleton demonstrating a React app with an Express backend. The skeleton types loaded below are retrieved via an XHR request to the Express server.
        </p>

        <h2>Skeleton Types</h2>

        { state.skeletons.map(skeleton => (<Skeleton name={ skeleton.name } />)) }
      </div>
    );
  }
}

export default App;
