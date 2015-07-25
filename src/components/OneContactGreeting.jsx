var React = require("react");

var OneContactGreeting = React.createClass({
  handleDelete: function(event) {
    event.preventDefault();
    this.props.deleteContact(this.props.contact);
  },
  render: function() {
    return (
      <li className="collection-item">
        <a href={"mailto:" + this.props.contact.email}>Hello {this.props.contact.name} </a>
        <span onClick={this.handleDelete}>Delete</span>
      </li>
    )
  }
});


module.exports = OneContactGreeting;
