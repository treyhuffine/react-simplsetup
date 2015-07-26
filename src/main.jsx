var React = require("react");
var ReactDOM = require("react-dom");

import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory'

import App from './components/app.jsx';
import About from './components/about';

var Container = React.createClass({
  render () {
    return (
      <div>
        <Link to="/">Home</Link>
        |
        <Link to="/about">About Page</Link>
        {this.props.children}
      </div>
    )
  }
});

document.addEventListener('DOMContentLoaded', function() {
  Parse.initialize("MhQAr8s4VeQFOoY4SUsMf77jfIjfA0vTW9Ftsr8n", "aTKuQPMGcn6A7GxhQ9EKZ6vc83MCtfYz0OT1f8wR");
  ReactDOM.render((
    <Router history={history}>
      <Route component={Container}>
        <Route name="root" path="/" component={App}/>
        <Route name="about" path="about(/:id)" component={About} />
      </Route>
    </Router>
  ), document.getElementById("root"));
})
