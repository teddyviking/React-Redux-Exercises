import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/greeting.js';
import GreetingProps from './components/greeting_props.js';
import CounterList from './components/counter_list.js';
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
        <CounterList totalCounters={5}/>
      </div>
    )
  }
});

window.onload = function(){
  ReactDOM.render(<HelloWorld />, document.getElementById('app'));
}
