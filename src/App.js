import React, { Component } from "react";
import "./App.css";

import store from "./store";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onChange(e) {
    console.log(e.target.value);
    this.props.dispatch({ type: "changeInputValue", payload: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(store.getState().changeInputValue.inputValue);
    this.props.dispatch({
      type: "addUser",
      payload: this.props.store.changeInputValue.inputValue
    });
    this.props.dispatch({ type: "changeInputValue", payload: "" });
  }

  onDelete(e) {
    console.log(e.target.innerText);
    this.props.dispatch({
      type: "deleteUser",
      payload: e.target.innerText
    });
    this.props.dispatch({ type: "changeInputValue", payload: "" });
  }

  render() {
    // Create a subscribe to console the changes
    /*const unsubscribe = store.subscribe(() => {
      console.log(store.getState());
    });
    // Dispatching the actions
    store.dispatch({ type: "addUser", payload: "S.M.Deepak" });
    store.dispatch({ type: "addUser", payload: "S.Masilamani" });
    store.dispatch({ type: "addUser", payload: "M.Ananthi" });
    // Stopping console the changes
    unsubscribe();*/
    return (
      <div className="App">
        <form onSubmit={this.onSubmit} id="inputBox">
          <input
            name="input"
            type="text"
            value={this.props.store.changeInputValue.inputValue}
            onChange={this.onChange}
            autoComplete="off"
            spellCheck={false}
            placeholder="Enter your Todo here..."
          />
        </form>
        <ul id="list">
          {this.props.store.addUser.map((user, index) => (
            <li
              key={index}
              id={index}
              data-value={index}
              onClick={this.onDelete}
            >
              {user}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  store
});

const mapDispatchToProps = dispatch => ({
  dispatch: (type, payload) => dispatch(type, payload)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
