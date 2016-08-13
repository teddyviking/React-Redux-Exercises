import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/Greeting.js';
import GreetingProps from './components/Greeting_props.js';

const HelloWorld = React.createClass ({
  render() {
    let user = {
      firstName: 'Matt',
      lastName: 'Murdock'
    };

    return (
      <div>
        <Greeting />
        <GreetingProps user={user} text="You are awesome!" />
      </div>
    )
  }
});

window.onload = function(){
  ReactDOM.render(<HelloWorld />, document.getElementById('app'));
}
