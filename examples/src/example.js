var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('react-menu');

var items = [{
			route: '#',
			label: 'Item 1'
		}, {
			route: '#',
			label: 'Item 2'
		}, {
			route: '#',
			label: 'Item 3'
		}, {
			route: '#',
			label: 'Item 4'
		},]

var App = React.createClass({
	render () {
		return (
			<div>
				<Menu items={items} />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
