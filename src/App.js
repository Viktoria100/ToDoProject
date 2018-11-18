import React, { Component } from 'react';
import './App.css';
import CreateToDoForm from './components/CreateToDoForm'
import ToDoList from './components/ToDoList';

class App extends Component {
  render() {
    return (
      <div class="blurblock">
          <div class="block">

        <CreateToDoForm class="addTask"></CreateToDoForm>
              <div class="a">
        <ToDoList></ToDoList>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
