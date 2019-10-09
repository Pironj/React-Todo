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
    // console.log('Input received');
    const inputText = e.target.value
    const currentItem = {
      text: inputText,
      key: Date.now(),
    }
    // set the state of currentItem to our new currentItem object we created that pulls the value of the input field as a variable inputText
    this.setState({
      currentItem
    })
  }
  // function to handle when we click our add task button
  addItem = e => {
    e.preventDefault();
    // console.log('You added an item!');
    // save state of currentItem as a new variable newItem
    const newItem = this.state.currentItem
    // check for a value for currentItem before adding item to our item array.
    // do not want to add empty tasks to our todo list
    if (newItem !== '') {
      console.log(newItem);
      // create a copy of item array and add newITem
      const items = [...this.state.items, newItem]
      // update state
      this.setState({
        // setState of item array to our newly updated copied item array.
        items: items,
        // Once we set the new state of our items array we want to clear the currentItem object for the next submit.
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
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
