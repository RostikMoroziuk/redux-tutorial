import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

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

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
