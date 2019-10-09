import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'

class App extends Component {
  // create a reference to input field
  inputElement = React.createRef()
  constructor() {
    super()

    this.state = {
      items: [],
      currentItem: {
        text:'', 
        key:''
      },
    }
  }
    
  handleInput = e => {
    console.log('Input received');
  }
  addItem = e => {
    e.preventDefault();
    console.log('You added an item!');
  }
  render() {
    return (
      <div className="App">
        <TodoList 
          addItem={this.addItem}
          handleInput={this.handleInput}
          inputElement={this.inputElement}
          currentItem={this.state.currentItem}
          />
      </div>
    );
  }
}

export default App;
