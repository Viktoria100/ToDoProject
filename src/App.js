import React, { Component } from 'react';
import './App.css';
import CreateToDoForm from './components/CreateToDoForm'
import ToDoList from './components/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateToDoForm></CreateToDoForm>
        <ToDoList></ToDoList>
      </div>
    );
  }
}

export default App;
