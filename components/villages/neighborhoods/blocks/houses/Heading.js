import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class Heading extends React.Component {
  render() {
    return (
      <div>
        <h2 className="heading">
        DevBot analyzes popular articles
        </h2>
      </div>
    )
  }
}

module.exports = Heading;
