import React, {Component} from 'react';
import Counter from './counter.js';


class CounterList extends Component {
  render() {
    return (
      <div>
        {createList(this.props.totalCounters)}
      </div>
    )
  }
}

function createList (totalCounters){
  let counters = [];

  for(let i = 0; i < totalCounters; i++) {
    counters.push(<Counter key={i} />);
  }
  return counters;
}
export default CounterList;
