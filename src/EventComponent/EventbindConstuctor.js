import React from 'react';

export default class EventbindConstuctor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      message: 'World',
    });
  };

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.handleClick}>CLICK ME</button>
      </div>
    );
  }
}
