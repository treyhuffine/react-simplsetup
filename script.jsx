var Hello = React.createClass({
  render: function() {
    var names = ["Gerald", "Dan", "Trey", "Samer", "Sheryl", "Elijah", "Ryano"];
    var greetings = ["Hello", "Welcome", "What's happenin"];

    var hellos = [];

    for (var i = 0; i < names.length; i++) {
      hellos.push(<h1 key={i}>{greetings[i%greetings.length]} {names[i]}</h1>);
    }
    return (
      <div>
        {hellos}
      </div>
    );
  }
});

React.render(
  <div><Hello /></div>,
  document.getElementById("root")
);
