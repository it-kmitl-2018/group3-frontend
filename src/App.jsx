import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home"

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
