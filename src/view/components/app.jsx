/** @jsx React.DOM */

var App = React.createClass({
	componentDidMount: function() {
		// @todo: probably need additional key bindings for win/other
		Mousetrap.bind('option+command+i', this.showDevTools);
		Mousetrap.bind('ctrl+t', this.toggleLibraryPane);
	},
	getInitialState: function() {
		return { libraryPaneExpanded: true };
	},
	toggleLibraryPane: function() {
		this.setState({ libraryPaneExpanded: !this.state.libraryPaneExpanded });
	},
	showDevTools: function() {
		require('nw.gui').Window.get().showDevTools();
	},
	render: function() {
		var appClassName = this.state.libraryPaneExpanded ? 'library-pane-expanded' : '';

		return (
			<div id='app' className={appClassName}>
				<div id='header'>
					<a href='#' id='toggle-library-pane'
						onClick={this.toggleLibraryPane}
						className='fa fa-arrow-circle-right'>
					</a>
					<h1>Obscura</h1>
				</div>
				<LibraryPane />
				<h2>Welcome!</h2>
			</div>
		);
	}
});
