var Hello = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.greet} {this.props.name}
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    var component = this, collection = component.props.collection;

    var greets = Object.keys(collection).map(function(person) {
      return (<Hello name={person} greet={collection[person]} />);
    });
    return (
      <div>
        <h1>React Example</h1>
        {greets}
      </div>
    )
  }
})

React.render(
  <div><App collection={ {gerald: 'hi', ryan: 'hello', trey: 'yo'} }/></div>,
  document.getElementById("root")
);
