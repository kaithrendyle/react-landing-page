import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class Laptop extends React.Component {
  render() {
    return (
      <div>
        <Col lg={6}>
          <div className="laptop"></div>
        </Col>
      </div>
    )
  }
}

module.exports = Laptop;
