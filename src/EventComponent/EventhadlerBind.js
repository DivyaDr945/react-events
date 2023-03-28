import React from 'react';

export default class EventhadlerBind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hi this is Event',
    };
  }
  habldeClick() {
    this.setState({
      message: 'Hi this is Event Bind method',
    });
  }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.habldeClick.bind(this)}>
          Click event handler bind{' '}
        </button>
      </div>
    );
  }
}
