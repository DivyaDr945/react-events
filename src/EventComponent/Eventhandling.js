import React from 'react';

class Eventhandling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
  }
  handleClick() {
    this.setState((state) => ({ isToggleOn: !state.isToggleOn }));
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>
          {' '}
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}
export default Eventhandling;
