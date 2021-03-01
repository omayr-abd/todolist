import { List } from '@material-ui/core';
import React from 'react';
import Todo from "./Todo";

export default function TodoList({ todos, toggleComplete, removeTodo }) {
	return (
		<List>
			{todos.map(todo => (
				<Todo 
					key={todo.id} 
					todo={todo} 
					toggleComplete={toggleComplete}
					removeTodo={removeTodo}
				/>
				))}
		</List>
	);
}

