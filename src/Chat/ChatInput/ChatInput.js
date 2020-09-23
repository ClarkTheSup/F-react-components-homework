import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      role: '',
      tags: [],
    };
  }

  sendMessage = () => {
    this.updateText();
    const message = {
      ...this.state,
    };
    this.props.concatMessage(message);
    this.clearInput();
  };

  updateText = () => {
    const text = document.getElementById('messageText').value;
    const role = 'CUSTOMER';
    this.setState({ text, role });
  };

  hasPressedEnter = (event) => {
    if (event.keyCode === 13) {
      return true;
    }
    return false;
  };

  clearInput = () => {
    document.getElementById('messageText').value = '';
  };

  render() {
    return (
      <footer className="ChatInput">
        <input
          type="text"
          onChange={this.updateText}
          onKeyUp={(event) => this.hasPressedEnter(event) && this.sendMessage()}
          id="messageText"
        />
        <button type="button" onClick={this.sendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
