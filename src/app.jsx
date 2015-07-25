var React = require("react");
var ReactDOM = require("react-dom");

var ListOfGreetings = require("./components/ListOfGreetings");
var GreetingForm = require("./components/GreetingForm");


var App = React.createClass({
  getInitialState: function() {
    return { users: [] }
  },
  greet: function(user) {
    this.setState({
      users: this.state.users.concat(user)
    });
  },
  deleteUser: function(user) {
    this.setState({
      user: this.state.users.splice(user.listLocation, 1)
    })
  },
  render: function() {
    return (
      <div>
        <GreetingForm greet={this.greet} />
        <hr />
        <ListOfGreetings users={this.state.users} deleteUser={this.deleteUser}/>
      </div>
    )
  }
})

React.render(
  <div><App /></div>,
  document.getElementById("root")
);
