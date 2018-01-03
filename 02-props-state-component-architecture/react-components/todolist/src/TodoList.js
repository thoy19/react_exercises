import React, { Component } from 'react';
import Todo from './Todo'
import './TodoList.css'
import NewTodoForm from './NewTodoForm'


class TodoList extends Component {
	constructor(props){
   		super(props);
   		this.state = {
   			todos: [
   				{
					id: 1,
					title: 'Do THIS!!',
					text: 'Get homework done!'
				}, 
				{
					id: 2,
					title: 'Please work!!',
					text: 'Still more to do!'
				}], 
			newTodo: ''
   		};
  	}

  	handleRemove(idx) {
  		const { todos } = this.state;
  		const newTodos = todos
  			.slice(0, idx)
  			.concat(todos.slice(idx + 1));
  		this.setState({
  			todos: newTodos
  		});
  	}

	render() {
		let todos = this.state.todos.map((todo, idx) => {
			return (
				<Todo key={todo.id}
					removeTodo= {this.handleRemove.bind(this, idx)}
					title={todo.title}
					text={todo.text}
				/>
			)
		})
		return (
			<div>
				<h1>TodoList!</h1>
				<NewTodoForm />
				<div className='todolist-container'>
					{todos}
				</div>
			</div>
		)
	}
}

export default TodoList;