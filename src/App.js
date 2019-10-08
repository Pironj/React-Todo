import React from 'react';
import './App.css';
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <TodoList addItem={this.addItem}/>
    </div>
  );
}

export default App;
