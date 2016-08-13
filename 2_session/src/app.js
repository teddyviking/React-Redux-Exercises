import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/Greeting.js';

const HelloWorld = React.createClass ({
  render() {
    return (
      <div>
        <Greeting />
      </div>
    )
  }
});

window.onload = function(){
  ReactDOM.render(<HelloWorld />, document.getElementById('app'));
}
