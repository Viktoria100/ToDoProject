import React, { Component } from 'react';

class ToDoItem extends Component {
  render() {
    return (
      <ul className="ToDoItem">
        {this.props.endTime} / {this.props.text}
      </ul>
    );
  }
}

export default ToDoItem;