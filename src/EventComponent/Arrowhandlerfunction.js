import React from 'react';
//import ReactDOM from 'react-dom'

export default class Arrowhandlerfunction extends React.Component {
  render() {
    return (
      <button onClick={this.handleClick} style={this.state}>
        Set background to red
      </button>
    );
  }

  handleClick = () => {
    this.setState({ backgroundColor: 'red' });
  };
}
