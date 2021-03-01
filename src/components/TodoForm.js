import { Button, TextField } from '@material-ui/core';
import React, {useState} from 'react';

export default function TodoForm( {addTodo} ) {
	const [todos, setTodos] = useState({
		id: "",
		text: "",
		checked: false
	});

	function handleTextInputChange(e) {
		setTodos({ ...todos, text: e.target.value});
	}


	function handleSubmit(e) {
		e.preventDefault();
		if (todos.text.trim()) {
			addTodo(todos.text);

			// reset text input
			setTodos({ ...todos, text: ""});
		}
	}

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<TextField
				label="text" 
				name="text"
				type="text"
				value={todos.text}
				onChange={handleTextInputChange}
			/>
			<Button type="submit"> submit</Button>
		</form>
		)

}