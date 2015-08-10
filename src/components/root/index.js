import React from 'react';
import Router from 'react-router';
var RouteHandler = Router.RouteHandler;

import Intro from '../intro/intro.js';

export default React.createClass({
  safeStringify(obj) {
    return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
  },

  render() {
    var initialProps = {
      __html: this.safeStringify(this.props)
    };

    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@peduarte" />
          <meta name="twitter:creator" content="@peduarte" />
          <meta name="twitter:title" content="London Housing Headlines" />
          <meta name="twitter:description" content="A visual comment on the property market insanity in London" />
          <meta name="twitter:url" content="http://pedroduarte.me/london-housing/" />
          <meta name="twitter:image" content="http://pedroduarte.me/london-housing/postcard.jpg" />

          <meta property="og:url" content="http://pedroduarte.me/london-housing/" />
          <meta property="og:image" content="http://pedroduarte.me/london-housing/postcard.jpg" />
          <meta property="og:title" content="London Housing Headlines" />
          <meta property="og:description" content="A visual comment on the property market insanity in London" />

          <link rel="icon" type="image/png" href="http://pedroduarte.me/london-housing/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="http://pedroduarte.me/london-housing/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="http://pedroduarte.me/london-housing/favicon-64x64.png" sizes="64x64" />
          <link rel="icon" type="image/png" href="http://pedroduarte.me/london-housing/favicon-96x96.png" sizes="96x96" />

          <title>{this.props.title}</title>
          <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
          <h1>London Housing Headlines</h1>
          <div id="Loader" className="Loader">
            <Intro text="londonhousingheadlines" />
          </div>
          <RouteHandler {...this.props} />

          <script id="initial-props" type="application/json" dangerouslySetInnerHTML={initialProps} />
          <script src="bundle.js" />
        </body>
      </html>
    )
  }
});
