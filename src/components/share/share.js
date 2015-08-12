import './share.css';

import React from 'react';

import TwitterIcon from '../assets/twitter.js';
import FacebookIcon from '../assets/facebook.js';

export default React.createClass({
  render() {

    var self = this;

    var shareUrl = function() {
      switch(self.props.network) {
        case 'facebook':
          return 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flondon-housing.uk';
          break;
         case 'twitter':
          return 'https://twitter.com/intent/tweet?url=http%3A%2F%2Flondon-housing.uk&text=London%20Housing%20Headlines&hashtags=crisis,london,housing';
          break;
      }
    }();

    return (
      <a className="Button Share" href={shareUrl} target="_blank">
        {this.props.children}
      </a>
    )
  }
});
