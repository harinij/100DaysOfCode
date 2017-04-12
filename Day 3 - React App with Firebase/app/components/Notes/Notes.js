var React = require('react');
var NotesList = require('./NotesList');

var Notes = React.createClass({
  render: function(){
    return (
      <div>
        <h3> Notes for {this.props.username} </h3>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
})

module.exports = Notes;