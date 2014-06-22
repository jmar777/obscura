/** @jsx React.DOM */

var Panel = React.createClass({
	render: function() {
		return (
			<div id={this.props.id} className='panel'>
				<div className='panel-heading'>
					<h3 className='panel-label'>
						{this.props.label}
					</h3>
				</div>
				<div className='panel-body'>
					{this.props.children}
				</div>
			</div>
		);
	}
});
