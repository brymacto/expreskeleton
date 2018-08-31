import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './skeleton.css';

class Skeleton extends Component {
  render() {
    const { name } = this.props;

    return (
      <div className="skeleton-container">
        { name }
      </div>
    );
  }
}

Skeleton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Skeleton;
