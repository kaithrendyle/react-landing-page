import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
class DemoLink extends React.Component {
  render() {
    return (
      <div>
        <Link to="/demo">
          <span className="demo-link">
          Demo
          </span>
        </Link>
      </div>
    )
  }
}

module.exports = DemoLink;
