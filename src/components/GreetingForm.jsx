var React = require("react");

var GreetingForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.greet({name: this.refs.name2greet.value, email: this.refs.email2greet.value});
    this.refs.userForm.reset();
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit} ref="userForm">
        <input placeholder="Name" ref="name2greet" required />
        <input type="email" placeholder="Email" ref="email2greet" required />
        <button>Greet</button>
      </form>
    )
  }
});

module.exports = GreetingForm;
