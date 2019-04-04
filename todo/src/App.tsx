import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';
import { Todo } from './Todo';
import TodoListForm from './TodoListForm';

interface AppState {
  arr_todos:Todo[];
  todoForm:Todo;
}

class App extends Component <any,AppState> {

  constructor(props: any) {
      super(props);

      this.state = {
        arr_todos: [],
        todoForm: {
          title: 'toto',
          completed: true,
          dueDate: 0,
          user_id: 0,
          id: 0
        }
      };
      this.deleteTodo = this.deleteTodo.bind(this);
      
  }

  componentDidMount() {
    this.loadTodos()
  }

  loadTodos(){
    return fetch('http://localhost:3004/todos')
      .then(response => response.json())
      .then(todos => this.setState({ arr_todos: todos }));
  }

  deleteTodo(todo:Todo){
    const url = `http://localhost:3004/todos/${todo.id}`
    fetch(url,{method:'DELETE'}).then( _ => this.loadTodos())
  }

  saveTodo(e:any){
    const url = `http://localhost:3004/todos/`;
    e.preventDefault();
    const data = this.state.todoForm
    const conf = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch(url,conf).then(_ => this.loadTodos())
  }

  handleChange = (e:any)=>{
    console.log(e);

    const theValue = {[e.target.name] : e.target.type==='checkbox'?e.target.checked:e.target.value};
    this.setState((state:any,props:any)=>{
      const obj = {...state.todoForm,theValue}
      Object.assign(state.todoForm,theValue) 
      return state;
    });
  }

  render() {
    return (
      <div className="container">
        <TodoList todos={this.state.arr_todos} onDelete={this.deleteTodo}/>
        <TodoListForm value={this.state.todoForm} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
