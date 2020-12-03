import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";

import './app.css';
import ItemStatusFilter from "../item-status-filter";

// const el = <h1>Hello</h1>; // JSX === ReactDOM.createElement('h1', null, 'Hello');

const App = () => {
    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Build App', important: true, id: 2},
        {label: 'Launch', important: true, id: 3},
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>

            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;
