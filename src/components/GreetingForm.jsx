var React = require("react");

var GreetingForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.greet({name: this.refs.name2greet.value, email: this.refs.email2greet.value});
    this.refs.userForm.reset();
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit} ref="userForm" className="card-panel grey lighten-3 hoverable">
        <div className="input-field">
          <input type="text" ref="name2greet" required />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field">
          <input type="email" ref="email2greet" required />
          <label htmlFor="email">Email</label>
        </div>
        <button className="btn-floating btn-large waves-effect green" type="submit">
          <i className="material-icons">add</i>
        </button>
      </form>
    )
  }
});

module.exports = GreetingForm;
