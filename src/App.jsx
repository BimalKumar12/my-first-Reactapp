// import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
// import LightSwitch from './components/lightswitch'

import React from 'react'
import Counter from './components/Counter'
// import InputCapture from './components/InputCapture'
import SearchBar from './components/SearchBar'
import SecretMessage from './components/SecretMessage'
import TodoList from './components/TodoList'
import AutoFocusForm from './components/AutofocusForm'
const App = () => {
  return (
    <div>
      <Dashboard />
      {/* <LightSwitch /> */}
      <Counter />
      {/* <InputCapture/> */}
      <SearchBar />
      <SecretMessage />
      <TodoList />
      <AutoFocusForm />
    </div>
  )
}

export default App
