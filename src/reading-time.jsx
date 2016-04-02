import React from 'react';

export default class ReadingTime extends React.Component {
    static propTypes = {
        wordsPerMinute: React.PropTypes.number
    };

    static defaultProps = {
      wordsPerMinute: 250
    };

    constructor(props) {
      super(props);

      this.state = {
        readTime: 0
      };
    }

    render() {
      return (
        <div>Hello it's ReadingTime!</div>
      );
    }
}
