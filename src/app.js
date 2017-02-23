import React, { Component } from 'react';
import './app.css';
import Title from './components/title/title';
import Graph from './components/graph/graph';
import Sales from './components/sales/sales';
import Stats from './components/stats/stats';

class App extends Component {
  render() {
    return (
        <div className="appWrapper">
            <div className="app">
                <Title title="Sales vs Target for Week 3"></Title>
                <Graph></Graph>
                <Sales></Sales>
                <Stats></Stats>
            </div>
        </div>
    );
  }
}

export default App;
