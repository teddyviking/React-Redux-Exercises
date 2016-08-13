import React, {Component} from 'react';
import Counter from './counter.js';


class CounterList extends Component {
  render() {
    let counters = [];
    let totalcounters = this.props.totalCounters;

    for(let i = 0; i < totalcounters; i++) {
      console.log(i);
      counters.push(<Counter key={i} />);
    }
    console.log(counters);

    return (
      <div>
        {counters}
      </div>
    )
  }
}

export default CounterList;
