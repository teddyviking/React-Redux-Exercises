import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick (e){
    let newCounter = this.state.counter + 1;
    this.setState({counter: newCounter});
  }

  render() {
    return(
      <div>
        <button onClick={this.onClick}>+1</button>
        <p>We have {this.state.counter} clicks!</p>
      </div>
    )
  }
}

export default Counter
