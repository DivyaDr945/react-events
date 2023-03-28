import React from 'react';

/**
 * Pass parameter to an event handler
 */
const A = 65; // ASCII character code

export default class EventhandlerParameter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      justClicked: null,
      letters: Array.from({ length: 26 }, (_, i) => String.fromCharCode(A + i)),
    };
  }

  handleClick(letter) {
    this.setState({ justClicked: letter });
  }

  render() {
    return (
      <>
        Just clicked: {this.state.justClicked}
        <ul>
          {this.state.letters.map((letter) => (
            <li key={letter} onClick={() => this.handleClick(letter)}>
              {letter}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
