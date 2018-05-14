var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
)