var OneUserGreeting = require("./OneUserGreeting");
import React from "react";

export default class ListOfGreetings extends React.Component {
  render() {
    let deleteFunction = this.props.deleteUser;
    let usersLIs = this.props.users.map((user, i) => {
      user.listLocation = i;
      return <OneUserGreeting user={user} deleteUser={deleteFunction} key={i}/>
    });
    return (
      <div>
        <ul>
          {usersLIs}
        </ul>
      </div>
    );
  }
}
