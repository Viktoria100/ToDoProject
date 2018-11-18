import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';

class ToDoList extends Component {
  renderToDoItem(item){
      return <ToDoItem text={item.text} endTime={item.endDateTime}/>
  }

  render() {
    return (
      <div className="ToDoItem">
        <ul>
            {this.props.todo.map(item => this.renderToDoItem(item))}
        </ul>
      </div>
    );
  }
}

export default connect(
    state => ({
      todo: state.todo
    })
  )(ToDoList);