import React, {Component} from 'react';

import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemAddForm from "../item-add-form";

import './app.css';
import ItemStatusFilter from "../item-status-filter";
import TodoListItem from "../todo-list-item";

// const el = <h1>Hello</h1>; // JSX === ReactDOM.createElement('h1', null, 'Hello');

export default class App extends Component {

    maxId = 100;
    text = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Build App'),
            this.createTodoItem('Launch'),
        ],
    }

    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [ // don't change current state! You should create new array and pass it to todoData
                ...todoData.slice(0, idx), ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray // like this
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];

            return {
                todoData: newArray
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })

    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    render() {

        const { todoData } = this.state;

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">

                <AppHeader toDo={todoCount} done={doneCount}/>

                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}

