var React = require("react");
var ReactDOM = require("react-dom");

var ContactList = require("./components/ContactList");
var ContactForm = require("./components/ContactForm");


var App = React.createClass({
  getInitialState: function() {
    return { contacts: [] }
  },
  greet: function(contact) {
    this.setState({
      contacts: this.state.contacts.concat(contact)
    });
  },
  deleteContact: function(contact) {
    this.setState({
      contact: this.state.contacts.splice(contact.listLocation, 1)
    })
  },
  style: function() {
    return {
      color: localStorage.getItem("headerColor") || "green",
      fontSize: 40
    }
  },
  theme: function() {
    return localStorage["theme"] || 'light';
  },
  toggleTheme: function(theme) {
    localStorage["theme"] = this.theme() === "dark" ? "light" : "dark";
    this.forceUpdate();
  },
  updateContact: function(index, checked) {
    var contacts = this.state.contacts;
    contacts[index].checked = checked;

    this.setState({contacts: contacts}, function() {
      console.log(this.state.contacts);
    })
  },
  deleteAllSelected: function() {
    var contacts = this.state.contacts;

    this.setState({
      contacts: contacts.filter(function(contact) { return !contact.checked; })
    })
  },
  render: function() {
    return (
      <div className={this.theme()}>
        <div className="container">
          <div style={this.style()}>Contact List</div>
          <ContactForm greet={this.greet} />
          <hr />
          <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact} updateContact={this.updateContact}/>
          <button type="button" className="btn" onClick={this.deleteAllSelected}>
            Delete All Selected
          </button>
          <a href="#" onClick={this.toggleTheme}>Toggle Theme</a>
        </div>
      </div>
    )
  }
})

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <div><App /></div>,
    document.getElementById("root")
  );
})
