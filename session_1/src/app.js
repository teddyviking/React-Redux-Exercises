import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = React.createClass ({
  render() {
    return (
      <div>
        <h1> Hello world! </h1>
      </div>
    )
  }
});

window.onload = function(){
  ReactDOM.render(<HelloWorld />, document.getElementById('app'));
}
