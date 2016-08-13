import React, {Component} from 'react';
import moment from 'moment';

const updateIntervalMS= 1000;

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: moment().format('h:mm:ss')
    };
    updateTime(this, updateIntervalMS);
  }

  render() {
    return(
      <div>
        <p> The time now: {this.state.time}</p>
      </div>
    );
  }
}

function updateTime(clock, interval) {
  setInterval(function(){
    let time = moment().format('h:mm:ss');
    clock.setState({time: time});
    updateTime(clock, updateIntervalMS);
  }, interval);
}

export default Clock;
