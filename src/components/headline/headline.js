import './headline.css';

import React from 'react';
import Word from '../word/word.js';

export default React.createClass({
  render() {
    var text = this.props.text;
    var textArray = text.split(' ');

    var wordNodes = textArray.map(function(word, index) {
      return (
        <Word text={word} key={index} />
      )
    });

    return (
      <div className="Headline">
        {wordNodes}
      </div>
    )
  }
});
