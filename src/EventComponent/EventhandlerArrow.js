import React from 'react';

export default class EventhandlerArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hi',
    };
  }
  hadlerclickarrow() {
    this.setState({ message: 'Divya' });
  }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={() => this.hadlerclickarrow()}>
          Bind event hadler arroe
        </button>
      </div>
    );
  }
}
