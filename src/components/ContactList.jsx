var OneContact = require("./OneContact");
import React from "react";

export default class ContactList extends React.Component {
  render() {
    let deleteFunction = this.props.deleteContact;
    let contactsLIs = this.props.contacts.map((contact, i) => {
      contact.listLocation = i;
      return <OneContact contact={contact} deleteContact={deleteFunction} updateContact={this.props.updateContact} key={i}/>
    });
    return (
      <div>
        <ul className="collection">
          {contactsLIs}
        </ul>
      </div>
    );
  }
}
