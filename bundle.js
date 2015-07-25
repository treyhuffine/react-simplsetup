/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var OneUserGreeting = React.createClass({
	  displayName: "OneUserGreeting",

	  handleDelete: function handleDelete(event) {
	    event.preventDefault();
	    this.props.deleteUser(this.props.user);
	  },
	  render: function render() {
	    return React.createElement(
	      "li",
	      null,
	      React.createElement(
	        "a",
	        { href: "mailto:" + this.props.user.email },
	        "Hello ",
	        this.props.user.name,
	        " "
	      ),
	      React.createElement(
	        "span",
	        { onClick: this.handleDelete },
	        "Delete"
	      )
	    );
	  }
	});

	var GreetingForm = React.createClass({
	  displayName: "GreetingForm",

	  handleSubmit: function handleSubmit(event) {
	    event.preventDefault();
	    this.props.greet({ name: this.refs.name2greet.value, email: this.refs.email2greet.value });
	    this.refs.userForm.reset();
	  },
	  render: function render() {
	    return React.createElement(
	      "form",
	      { onSubmit: this.handleSubmit, ref: "userForm" },
	      React.createElement("input", { placeholder: "Name", ref: "name2greet", required: true }),
	      React.createElement("input", { type: "email", placeholder: "Email", ref: "email2greet", required: true }),
	      React.createElement(
	        "button",
	        null,
	        "Greet"
	      )
	    );
	  }
	});

	var ListOfGreetings = React.createClass({
	  displayName: "ListOfGreetings",

	  render: function render() {
	    var deleteFunction = this.props.deleteUser;
	    var usersLIs = this.props.users.map(function (user, i) {
	      user.listLocation = i;
	      return React.createElement(OneUserGreeting, { user: user, deleteUser: deleteFunction, key: i });
	    });
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "ul",
	        null,
	        usersLIs
	      )
	    );
	  }
	});

	var App = React.createClass({
	  displayName: "App",

	  getInitialState: function getInitialState() {
	    return { users: [] };
	  },
	  greet: function greet(user) {
	    this.setState({
	      users: this.state.users.concat(user)
	    });
	  },
	  deleteUser: function deleteUser(user) {
	    this.setState({
	      user: this.state.users.splice(user.listLocation, 1)
	    });
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(GreetingForm, { greet: this.greet }),
	      React.createElement("hr", null),
	      React.createElement(ListOfGreetings, { users: this.state.users, deleteUser: this.deleteUser })
	    );
	  }
	});

	React.render(React.createElement(
	  "div",
	  null,
	  React.createElement(App, null)
	), document.getElementById("root"));

/***/ }
/******/ ]);