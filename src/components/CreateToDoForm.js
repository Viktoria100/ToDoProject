import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateToDoForm extends Component {

  addToDo = () => {
    if (this.inputText.value !== '' && this.inputDate.value) {
      this.props.onAddToDo({
        text: this.inputText.value,
        endDateTime: this.inputDate.value,
        active: true
      });
      this.inputText.value = '';
      this.inputDate.value = '';
    }
  }

  render() {
    return (
      <div className="CreateToDoForm">
        <input className="datetime" type="date" ref={(a) => this.inputDate = a}></input>
        <input type="text" size="40" ref={(a) => this.inputText = a}></input>
        <input type="button" value="Добавить" onClick={this.addToDo}></input>
      </div>
    );
  }
}

export default connect(
  state => ({
    todo: state.todo
  }),
  dispatch => ({
    onAddToDo: (item) => { 
      dispatch({type: 'ADD_ITEM', item: item});
    }
  })
)(CreateToDoForm);
