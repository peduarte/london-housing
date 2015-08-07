import './news-item.css';

import React from 'react';

import Headline from '../headline/headline.js';

export default React.createClass({
  render() {
    var data = this.props.data;

    return (
      <div className="NewsItem">
        <Headline text={data.headline} />
        <div className="NewsItem-meta">
          <p className="NewsItem-byline">By {data.author}</p>
          <p className="NewsItem-source"><strong>{data.source}</strong> {data.date}</p>
          <p className="NewsItem-dip">{data.diptext}</p>
          <p className="NewsItem-actions">
            <a href={data.url} className="NewsItem-link" title={data.headline} target="_blank">Read article</a>
          </p>
        </div>
      </div>
    )
  }
});
