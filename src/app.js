import './styles/styles.css';
import './styles/wallop-slider.css';

import React from 'react';
import gsx from 'gsx';
import FastClick from 'fastclick';

import localData from './data/headlines.js';
import Intro from './components/intro/intro.js';
import NewsList from './components/news-list/news-list.js';
import RefreshIcon from './components/assets/refresh.js';
import Footer from './components/footer/footer.js';
import About from './components/about/about.js';

import helpers from './helpers.js';

FastClick.attach(document.body);

if (process.env.NODE_ENV === 'development') {
  setTimeout(function() {
    initApp(localData);
  }, 500);
} else {
  setTimeout(function() {
    loadData();
  }, 2000);
}

function loadData() {
  gsx('154vXxCyjyCeyrYB42YIBzxRBOVb7wUTd--UTFW-bjOE', function (err, data) {
    data.sheets[0].fetch(function (err, data) {
      initApp(data);
    });
  });
}

function initApp(data) {
  helpers.addClass(document.querySelector('body'), 'is-ready');

  React.unmountComponentAtNode(document.getElementById('Loader'));

  // adding setTimeout to give me time to animate
  // this via CSS when .is-ready is added
  React.render(
    <div className="Container">
      <div className="WallopSlider WallopSlider--fade">
        <NewsList data={data} />
        <button className="Button WallopSlider-btn WallopSlider-btn--previous" disabled="disabled">Previous</button>
        <button className="Button WallopSlider-btn WallopSlider-btn--next btn">Next <RefreshIcon /></button>
      </div>
      <About />
      <Footer />
    </div>,
    document.getElementById('App')
  )

}


React.render(
  <Intro text="londonhousingheadlines" />,
  document.getElementById('Loader')
)

