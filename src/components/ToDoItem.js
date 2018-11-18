import React, { Component } from 'react';

class ToDoItem extends Component {
  render() {
    return (
      <ul>
        {this.props.endTime} / {this.props.text}
      </ul>
    );
  }
}

export default ToDoItem;