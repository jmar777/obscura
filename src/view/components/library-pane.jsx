/** @jsx React.DOM */

var LibraryPane = React.createClass({
	render: function() {
		return (
			<div id='library-pane'>
				<Panel id='folders-panel' label='Folders'>
					<div id='add-folder'>
						<i className='fa fa-plus-circle'></i>
						add a folder
					</div>
				</Panel>
			</div>
		);
	}
});
