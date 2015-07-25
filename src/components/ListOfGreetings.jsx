var OneContactGreeting = require("./OneContactGreeting");
import React from "react";

export default class ListOfGreetings extends React.Component {
  render() {
    let deleteFunction = this.props.deleteContact;
    let contactsLIs = this.props.contacts.map((contact, i) => {
      contact.listLocation = i;
      return <OneContactGreeting contact={contact} deleteContact={deleteFunction} key={i}/>
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
