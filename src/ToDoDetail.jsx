import React from 'react';
import BorderedBox from "./BorderedBox.jsx";

function ToDoDetail({todo, onToggle}) {
    let buttonStyle = {
        marginLeft: '50px'
    }

    let strikeOutStyle = {
        textDecoration: 'line-through'
    }

    return (
        <BorderedBox>
            <h3 style={todo.isCompleted ? strikeOutStyle : null}>
                {todo.date}의 할일: {todo.task}
            </h3>
            <button style={buttonStyle} onClick={() => onToggle(todo.id)}>
                {todo.isCompleted ? 'X':'O'}
            </button>
        </BorderedBox>
        // ✓
    )
}

export default ToDoDetail