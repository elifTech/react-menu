var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('react-menu');

console.log(Menu);

var data = [
	{id: 1, author: 'Pete Hunt', text: 'This is one comment'},
	{id: 2, author: 'Jordan Walke', text: 'This is *another* comment'}
]

var items = ['Menu1', 'Menu2', 'Menu3', 'Menu4'];

var handleCommentSubit = function(comment){

}

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
