/*eslint-disable strict */ //Disable check because need jQuery global variable

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('./common/header');
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = App;