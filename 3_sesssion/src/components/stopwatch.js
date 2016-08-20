import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import { extractTimeParts } from '../lib/utils';
import Header from './header.js';


const Timer = ({time}) => {
  return (
    <div className="timer">
      <span className="timer-hours">{time.minutes}</span>:
      <span className="timer-minutes">{time.seconds}</span>:
      <span className="timer-seconds">{time.milliseconds}</span>
    </div>
  );
};

Timer.propTypes = {
  time: PropTypes.shape({
    hours: PropTypes.string,
    minutes: PropTypes.string,
    seconds: PropTypes.string,
    milliseconds: PropTypes.string
  }).isRequired
}

const Control = ({ onStart, onStop }) => {
  return (
    <div className="actions">
      <button onClick={onStop}>STOP</button>
      <button onClick={onStart}>START</button>
    </div>
  )
};

Control.propTypes = {
  onStart: PropTypes.func,
  onStop: PropTypes.func
}


class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      running: false,
      stopped: false,
      start: 0,
      current: 0
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  handleStart() {
    if (!this.state.stopped && !this.state.running) {
      this.setState({
        running: true,
        start: Date.now(),
        interval: setInterval(() => this.setState({ current: Date.now() }), 50)
      })
    }else if(!this.state.running){
      this.setState({
        running: true,
        interval: setInterval(() => this.setState({ current: Date.now() }), 50)
      });
    }
  }

  handleStop() {
    if (this.state.running) {
      clearInterval(this.state.interval);
      this.setState({running: false, stopped: true});
    } else if (this.state.stopped) {
      this.setState({stopped: false, start: 0, current: 0});
    }
  }

  render() {
    let time = extractTimeParts(this.state.current - this.state.start);
    return (
      <div className="crono">
        <Header text="Stop Watch"/>
        <div className="content">
          <Timer time={time}/>
          <Control onStart={this.handleStart} onStop={this.handleStop}/>
        </div>
      </div>
    );
  }
}



export default Stopwatch;
