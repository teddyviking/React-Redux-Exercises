import React, {Component} from 'react';

class GreetingProps extends Component {
  render(){
    let {text, user} = this.props

    return (
      <div>
        <p> An special hello to {user.firstName} {user.lastName}: {this.props.text} </p>
      </div>
    );
  }
};


export default GreetingProps;
