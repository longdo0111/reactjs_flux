"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var notFoundPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Whoops! Sorry, there is nothing so see here.</p>
                <Link to="app">Back to Home</Link>
            </div>
        );
    }
});

module.exports = notFoundPage;