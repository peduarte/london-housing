import './about.css';

import React from 'react';

import CloseIcon from '../assets/close.js';

import helpers from '../../helpers.js';

export default React.createClass({
  closeAbout() {
    helpers.removeClass(document.querySelector('.About'), 'is-active');
  },

  render() {
    return (
      <div className="About">
        <p>This project is a compilation of recent media articles about the housing market crisis in London. The idea emerged out of our personal experiences living in the city, as London rapidly changes becoming unaffordable to many of us.</p>
        <p>The type characters are actual London buildings pulled from Google Maps. We realised the cityscape itself could deliver these messages, hoping that our collective dissatisfaction might lead to changes in the future.</p>
        <p>Concept & Design <a href="http://kmkstudio.co" title="Kenzo's website">Kenzo Mayama Kramarz</a> <br/> Development <a href="http://pedroduarte.me" title="Pedro's website">Pedro Duarte</a></p>
        <button className="Button About-closeBtn" onClick={this.closeAbout}><CloseIcon /></button>
      </div>
    )
  }
});
