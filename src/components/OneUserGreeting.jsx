var React = require("react");

var OneUserGreeting = React.createClass({
  handleDelete: function(event) {
    event.preventDefault();
    this.props.deleteUser(this.props.user);
  },
  render: function() {
    return (
      <li>
        <a href={"mailto:" + this.props.user.email}>Hello {this.props.user.name} </a>
        <span onClick={this.handleDelete}>Delete</span>
      </li>
    )
  }
});


module.exports = OneUserGreeting;
