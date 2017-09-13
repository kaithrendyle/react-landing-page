import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class Paragraph extends React.Component {
  render() {
    return (
      <div>
        <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vo lutpat, elit pulvinar aliquam convallis, libero mauris rhoncus erat, non porttit or lectus justo et ex. In hac habitasse platea dictumst.
        </p>
      </div>
    )
  }
}

module.exports = Paragraph;
