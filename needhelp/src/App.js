import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstructorList from './InstructorList'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Here are all the instructors!</h1>
          <InstructorList />
      </div>
    );
  }
}

export default App;
