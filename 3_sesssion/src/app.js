import React from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from './components/stopwatch.js'
import Todo from './components/todo.js'

window.onload = function(){
  ReactDOM.render(<Todo />, document.getElementById('app'));
}
