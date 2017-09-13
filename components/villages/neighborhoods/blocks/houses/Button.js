import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button className="button">Add to Slack</button>
      </div>
    )
  }
}

module.exports = Button;
