import React from 'react';
import ReactDOM from 'react-dom';

class ReactReadingTime extends React.Component {
  render() {
    return (
      //React.createElement('div', {className: 'container'}, 'Hello again! React!')
      <div className="container">
        Hello again! React!
      </div>
    )
  }
}

ReactDOM.render(<ReactReadingTime />, document.getElementById('react'));
