import React from 'react';
import _ from 'lodash';

import helpers from '../../helpers.js';
import WallopSlider from '../../WallopSlider.js';

import NewsItem from '../news-item/news-item.js';
import Headline from '../headline/headline.js';
import Word from '../word/word.js';

var wallop;

export default React.createClass({
  addRandomClassForAnimation() {
    var letters = Array.prototype.slice.call(document.querySelectorAll('.WallopSlider-item--current .Letter'));
    var lettersLength = letters.length;
    var index = 0;

    var lettersLoopInterval = setInterval(function() {
      var letter = letters[index];
      helpers.addClass(letter, 'is-animating');

      if (index === lettersLength-1) {
        helpers.addClass(document.querySelector('.WallopSlider-item--current'), 'is-animating')
        clearInterval(lettersLoopInterval);
        return;
      }

      index++;
    }, 75);
  },

  removeAnimationClasses() {
    var lettersAnimated = Array.prototype.slice.call(document.querySelectorAll('.is-animating'));

    lettersAnimated.map(function(letter, index) {
      helpers.removeClass(letter, 'is-animating');
    });
  },

  listenToSlideChange() {
    var self = this;

    wallop.on('change', function(event) {
      helpers.scrollUp();
      self.removeAnimationClasses();
      self.addRandomClassForAnimation();
    });
  },

  componentDidMount() {
    wallop = new WallopSlider(document.querySelector('.WallopSlider'), {carousel: true});

    this.addRandomClassForAnimation();
    this.listenToSlideChange();
  },

  render() {
    if (!this.props.data) { return; }

    var newsItemNodes = _.shuffle(this.props.data).map(function(entry, index) {
      var classString = 'WallopSlider-item';
      if (index === 0) { classString += ' WallopSlider-item--current'; }

      return (
        <div className={classString} key={index}>
          <NewsItem data={entry} key={index} />
        </div>
      )
    });

    return (
      <div className="WallopSlider-list">
        {newsItemNodes}
      </div>
    )
  }

});
