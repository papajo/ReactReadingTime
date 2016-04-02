import React from 'react';

export default class ReadingTime extends React.Component {
  static PropTypes = {
    wordsPerMinute: React.PropTypes.number
  }

  static defaultProps = {
    wordsPerMinute: 250
  }

  render(){
    return (
      <div></div>
    )
  }
}
