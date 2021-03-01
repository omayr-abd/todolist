import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

export default function Todo({ todo, toggleComplete, removeTodo }) {

	function handleCheckboxClick() {
		toggleComplete(todo.id);
	}

	function handleRemoveClick() {
		removeTodo(todo.id);
	}

	return (
		<ListItem style={{display: "flex" }}>
			<Checkbox
				checked={todo.checked} 
				onClick={handleCheckboxClick} 
			/>
			<Typography
				variant="body1"
				style={{
					textDecoraton: todo.checked ? "line-through" : null
				}}
			>
				{todo.text}
			</Typography>
			<IconButton onClick={handleRemoveClick}>
				<CloseIcon />
			</IconButton>
		</ListItem>
	);
}