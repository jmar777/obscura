/** @jsx React.DOM */

var App = React.createClass({
	componentDidMount: function() {
		window.addEventListener('keyup', e => {
			// shift + ctrl + i
			e.which === 73 && e.ctrlKey && e.shiftKey && this.showDevTools();
		});
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
