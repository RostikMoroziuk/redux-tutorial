import React, { Component } from 'react';
import { createStore } from 'redux'

import logo from './../logo.svg';
import './../styles/App.css';

/*
 * Test methods
 * 

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './../actions/actions'
import todoApp from './../reducers/reducers'

let store = createStore(todoApp)
// Log the initial state
console.log(store.getState())
// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
// Dispatch some actions (allows state to be updated)
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// Stop listening to state updates
unsubscribe()

*
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
