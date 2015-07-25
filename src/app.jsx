var React = require("react");
var ReactDOM = require("react-dom");

var ListOfGreetings = require("./components/ListOfGreetings");

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
