import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app";

ReactDOM.render(<App/>, // React element, not React component. `App` won't work. <App/> Will work.
    document.getElementById('root'));
