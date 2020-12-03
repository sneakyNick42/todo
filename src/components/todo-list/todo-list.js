import React from 'react';
import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => { // components must start with capital letter
    const elements = todos.map((item) => {

        const { id, ...itemProps } = item; // destructuring id and other properties separately

        return (
            <li key={id} className="list-group-item"> {/* React needs a key for optimization purposes */}
                <TodoListItem
                    { ...itemProps }
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                /> {/* spread operator for an object */}
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;
