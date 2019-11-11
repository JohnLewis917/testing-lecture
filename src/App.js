import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    input: '',
    todos: ['Practice the Piano']
  }
  addTodo(){
    this.setState({
      todos: [...this.state.todos, this.state.input]
    })
  }
  render(){
  return (
    <div className="App">
      {this.state.todos.map(el => (
        <li key={el}>{el}</li>
      ))}
      Practice the Piano
      <input type="text" value={this.state.input} onChange={e => this.setState({input: e.target.value})}/>
      <button onClick={() => this.addTodo}>Add Todo</button>
    </div>
  );
  }
}

export default App;
