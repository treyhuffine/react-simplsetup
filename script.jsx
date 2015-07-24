var OneUserGreeting = React.createClass({
  render: function() {
    return <li>Hello {this.props.name}</li>
  }
});

var GreetingForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.greet(this.refs.name2greet);
  },
  render: function() {
    return (
      <form>
        <input placeholder="Name" ref="name2greet" />
        <button onClick={this.handleSubmit}>Greet</button>
      </form>
    )
  }
});

var ListOfGreetings = React.createClass({
  render: function() {
    var usersLIs = this.props.users.map(function(name, i) {
      return <OneUserGreeting name={name} key={i}/>
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
  // name: this.refs.name2greet
  greet: function(nameInput) {
    this.setState({
      users: this.state.users.concat(nameInput.value)
    }, function() {
        nameInput.value = '';
       }
    );
  },
  render: function() {
    return (
      <div>
        <GreetingForm greet={this.greet} />
        <hr />
        <ListOfGreetings users={this.state.users} />
      </div>
    )
  }
})

React.render(
  <div><App /></div>,
  document.getElementById("root")
);
