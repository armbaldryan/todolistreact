import React from 'react';
import ReactDOM from 'react-dom';
import todos from './todos';
import App from './App';

  
ReactDOM.render(<App title = "React to do" initialData = {todos}/>,document.getElementById('root'));


