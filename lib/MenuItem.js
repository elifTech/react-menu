'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');

var MenuItem = React.createClass({
	displayName: 'MenuItem',

	getInitialState: function getInitialState() {
		return { focused: 0 };
	},

	clicked: function clicked(index) {
		this.setState({ focused: index });
	},

	render: function render() {
		var self = this;

		return React.createElement(
			'div',
			null,
			React.createElement(
				'ul',
				null,
				this.props.items.map(function (m, index) {
					var style = '';

					if (self.state.focused === index) {
						style = 'focused';
					}

					return React.createElement(
						'li',
						{ className: style, onClick: self.clicked.bind(self, index) },
						m
					);
				})
			)
		);
	}
});

exports['default'] = MenuItem;
module.exports = exports['default'];