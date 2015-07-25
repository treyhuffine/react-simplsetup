var React = require("react");

var ContactForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.addContact({name: this.refs.name2contact.value, email: this.refs.email2contact.value});
    this.refs.contactForm.reset();
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit} ref="contactForm" className="card-panel grey lighten-3 hoverable">
        <div className="input-field">
          <input type="text" ref="name2contact" required />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field">
          <input type="email" ref="email2contact" required />
          <label htmlFor="email">Email</label>
        </div>
        <button className="btn-floating btn-large waves-effect green" type="submit">
          <i className="material-icons">add</i>
        </button>
      </form>
    )
  }
});

module.exports = ContactForm;
