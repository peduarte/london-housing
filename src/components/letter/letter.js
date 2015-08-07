import './letter.css';
import data from '../../data/images.js';

import React from 'react';


export default React.createClass({
  render() {
    var self = this;

    var getLetter = function() {
      var letter = self.props.name.toLowerCase();

      switch (letter) {
        case '0':
          letter = 'zero';
          break;

        case '1':
          letter = 'one';
          break;

        case '2':
          letter = 'two';
          break;

        case '3':
          letter = 'three';
          break;

        case '4':
          letter = 'four';
          break;

        case '5':
          letter = 'five';
          break;

        case '6':
          letter = 'six';
          break;

        case '7':
          letter = 'seven';
          break;

        case '8':
          letter = 'eight';
          break;

        case '9':
          letter = 'nine';
          break;

        case ':':
          letter = 'colon';
          break;

        case ',':
          letter = 'comma';
          break;

        case '.':
          letter = 'period';
          break;

        case '£':
          letter = 'pound';
          break;

        case '!':
          letter = 'exclamation';
          break;

        case '\'':
        case '’':
          letter = 'apostrophe';
          break;
      }

      return letter;
    };

    var imgSrc = data[getLetter()];

    return (
      <img src={imgSrc} alt={this.props.name} className="Letter" />
    )
  }
});
