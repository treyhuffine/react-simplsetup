import React from 'react'

var ContactList = require("./ContactList");
var ContactForm = require("./ContactForm");

export default React.createClass ({
  getInitialState: function() {
    return { contacts: [] }
  },
  componentDidMount: function() {
    var ContactObject = Parse.Object.extend("ContactObject");
    var query = new Parse.Query(ContactObject);
    query.find({
      success: (results) => {
        console.log(results);
        this.setState({
          contacts: results.map(function(o) { return o.attributes; })
        });
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message)
      }
    })
  },
  addContact: function(contact) {
    this.setState({
      contacts: this.state.contacts.concat(contact)
    }, function() {
      var ContactObject = Parse.Object.extend("ContactObject");
      var parseContact = new ContactObject();
      parseContact.save(contact, {
        success: function(savedContact) {
          console.log(savedContact);
        },
        error: function(savedContact, error) {
          console.log(error);
        }
      });
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
          <ContactForm addContact={this.addContact} />
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
});
