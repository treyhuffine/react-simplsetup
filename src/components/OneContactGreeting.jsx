var React = require("react");

var OneContactGreeting = React.createClass({
  handleChange: function(event) {
    this.props.updateContact(this.props.contact.listLocation, !this.props.contact.checked);
  },
  handleDelete: function(event) {
    event.preventDefault();
    this.props.deleteContact(this.props.contact);
  },
  render: function() {
    let uniqId = `cb-${this.props.index}`;
    return (
      <li className="collection-item">
        <p>
          <input id={uniqId} type="checkbox"
            checked={this.props.contact.checked}
            onChange={this.handleChange} />
          <label htmlFor={uniqId}>
            <a href={"mailto:" + this.props.contact.email}>Hello {this.props.contact.name} </a>
            <span onClick={this.handleDelete}>Delete</span>
          </label>
        </p>
      </li>
    )
  }
});


module.exports = OneContactGreeting;
