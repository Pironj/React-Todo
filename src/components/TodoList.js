import React, { Component } from 'react';

class TodoList extends Component {
  // lifecycle method called to update form upon submit
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          {/* form which has our addItem function from our App.js file passed as prop to onSubmit */}
          <form onSubmit={this.props.addItem}>
            <input 
              placeholder="Task"
              // a reference prop to the input our user enters for the task 
              ref={this.props.inputElement}
              // prop that holds the text typed into the input field
              value={this.props.currentItem.text}
              // function that tracks keystokes and calls our handle input function in react
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList