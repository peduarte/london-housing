import './footer.css';

import React from 'react';

import Share from '../share/share.js';
import TwitterIcon from '../assets/twitter.js';
import FacebookIcon from '../assets/facebook.js';

import helpers from '../../helpers.js';

export default React.createClass({
  showAbout(e) {
    e.preventDefault();
    helpers.scrollUp();
    helpers.addClass(document.querySelector('.About'), 'is-active');
  },

  render() {
    return (
      <footer className="Footer">
        <nav>
          <a className="Footer-aboutLink" href="#" onClick={this.showAbout}>About the project</a>
          <Share network="facebook"><FacebookIcon /></Share>
          <Share network="twitter"><TwitterIcon /></Share>
        </nav>
      </footer>
    )
  }
});
