"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <NotFoundRoute handler={require('./components/notFoundPage')} />
        <route name="authors" handler={require('./components/authors/authorPage')} />
        <route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
        <route path="/about-us" name="about" handler={require('./components/about/aboutPage')} />
        <Redirect from="/about" to="about" />
    </Route>
);

module.exports = routes;