/** @jsx React.DOM */

var App = React.createClass({
	componentDidMount: function() {
		// @todo: probably need additional key bindings for win/other
		Mousetrap.bind('option+command+i', this.showDevTools);
	},
	showDevTools: function() {
		require('nw.gui').Window.get().showDevTools();
	},
	render: function() {
		return (
			<div id='app'>
				<h1>Welcome to Obscura!</h1>
			</div>
		);
	}
});
