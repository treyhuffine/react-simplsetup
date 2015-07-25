var OneUserGreeting = React.createClass({
  handleDelete: function(event) {
    event.preventDefault();
    this.props.deleteUser(this.props.user);
  },
  render: function() {
    return (
      <li>
        <a href={"mailto:" + this.props.user.email}>Hello {this.props.user.name} </a>
        <span onClick={this.handleDelete}>Delete</span>
      </li>
    )
  }
});

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

var ListOfGreetings = React.createClass({
  render: function() {
    var deleteFunction = this.props.deleteUser;
    var usersLIs = this.props.users.map(function(user, i) {
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
