import './word.css';

import data from '../../data/images.js';

import React from 'react';
import Letter from '../letter/letter.js';

export default React.createClass({
  render() {

    var text = this.props.text;
    var chars = [];

    var splitWord = function() {
      chars = text.split('');
    }();

    var letterNodes = chars.map(function(letter, index) {
      if (letter === ' ') { return; }

      return (
        <Letter name={letter} key={index} />
      );
    });

    return (
      <div className="Word">
        {letterNodes}
      </div>
    )
  }
});
