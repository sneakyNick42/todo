import React from 'react';
import ReactDOM from 'react-dom';

// const el = <h1>Hello</h1>; // JSX === ReactDOM.createElement('h1', null, 'Hello');

const TodoList = () => { // components must start with capital letter
    return (
        <ul>
            <li>Learn</li>
            <li>Build</li>
        </ul>
    )
};

const AppHeader = () => {
    return <h1>My Todo list</h1>
};

const SearchPanel = () => {
    return <input type="text" placeholder='search'/>
};

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
};

ReactDOM.render(<App/>, // React element, not React component. `App` won't work. <App/> Will work.
    document.getElementById('root'));
