import './intro.css';

import React from 'react';

import Word from '../word/word.js';
import helpers from '../../helpers.js';

var lettersTimeout;
var animationSpeed = 200;

export default React.createClass({
  componentDidMount() {
    var letters = Array.prototype.slice.call(document.querySelectorAll('.Intro .Letter'));
    var lettersLength = letters.length;
    var index = 0;

    var loopLetters = function() {
      lettersTimeout = setInterval(function() {
        helpers.removeClass(document.querySelector('.Intro .is-animating'), 'is-animating');
        helpers.addClass(letters[index], 'is-animating');

        if (index === lettersLength-1) {
          index = 0;
          return;
        }

        index++;
      }, 150);
    };

    loopLetters();
  },

  componentWillUnmount() {
    window.clearTimeout(lettersTimeout);
  },

  render() {
    return (
      <div className="Intro">
        <Word text={this.props.text} />
      </div>
    )
  }
});
