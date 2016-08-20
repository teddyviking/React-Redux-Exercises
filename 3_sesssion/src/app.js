import React from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from './components/stopwatch.js'
import Todo from './components/todo.js'
import Searcher from './components/got_searcher/index.js'

window.onload = function(){
  ReactDOM.render(<Searcher />, document.getElementById('app'));
}
