import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Belajar Praktek Pemrograman Jaringan',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Belajar Mobile Programming',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Belajar e-Commerce',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Belajar Jaringan Komputer',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Belajar e-Business',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Belajar Praktek Web Dinamis',
        completed: false
      },
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false

    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} 
          delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
