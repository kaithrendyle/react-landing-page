import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import UserMessage from './houses/User Message.js';
import ChatBotMessage from './houses/Chat Bot Message.js';

class SlackChannel extends React.Component {
  render() {
    const messages = this.props.messages;
    
    return (
        <Col lg={12}>
          <div className="slack-channel">
          { messages ? (
            <div>
              <UserMessage/>
              <ChatBotMessage/>
            </div>
          ) : (
            <div></div>
          )}
          </div>
        </Col>
    )
  }
}

module.exports = SlackChannel;
