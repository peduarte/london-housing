import './share.css';

import React from 'react';

import TwitterIcon from '../assets/twitter.js';
import FacebookIcon from '../assets/facebook.js';

export default React.createClass({
  render() {

    return (
      <a className="Button Share">
        {this.props.children}
      </a>
    )
  }
});
