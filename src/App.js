import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'

class App extends Component {
  // create a reference to input field
  inputElement = React.createRef()
  constructor() {
    super()

    this.state = {
      // array thaat stores each currentItem when add task button is clicked.
      items: [],
      // create an object to hold our user input when entered and added to our task list
      currentItem: {
        text:'', 
        key:''
      },
    }
  }
  // function that handles key presses
  handleInput = e => {
    console.log('Input received');
  }
  // function to handle when we click our add task button
  addItem = e => {
    e.preventDefault();
    console.log('You added an item!');
  }
  render() {
    return (
      <div className="App">
        <TodoList 
          // porperties we add to our todolist component to handle different events
          addItem={this.addItem}
          // passing our handleInput function here as a prop to our todolist component
          handleInput={this.handleInput}
          // passing our ref to the input field declared above as a prop to todolist component
          inputElement={this.inputElement}
          // passing the state of currentItem as a prop to our todolist component. Will display the value of the state once its set.
          currentItem={this.state.currentItem}
          />
      </div>
    );
  }
}

export default App;
