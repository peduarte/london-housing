// Routes.jsx
var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Root = require('./components/root/index.js')
var Index = require('./components/index/index.js')

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
  </Route>
)

module.exports = Routes
