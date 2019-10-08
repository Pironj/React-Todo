import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'

class App extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
    
  handleInput = e => {
    console.log('Input received');
  }
  addItem = () => {
    console.log('You added an item!');
  }
  render() {
    return (
      <div className="App">
        <TodoList 
          addItem={this.addItem}
          />
      </div>
    );
  }
}

export default App;
