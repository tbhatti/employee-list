import React, { Component } from 'react';
import './App.css';
import Employees from './employees'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Employees List</h1>
        </header>
       <Employees />
      </div>
    );
  }
}

export default App;
