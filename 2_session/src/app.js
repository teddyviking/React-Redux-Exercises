import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/greeting.js';
import GreetingProps from './components/greeting_props.js';
import Counter from './components/counter.js';
import Clock from './components/clock.js';


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
        <Counter />
        <Clock />
      </div>
    )
  }
});

window.onload = function(){
  ReactDOM.render(<HelloWorld />, document.getElementById('app'));
}
