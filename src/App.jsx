import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import store from "./redux"
import Home from "./containers/Home"

const App = () => (
  <div className="App">
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home } />
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>
)

export default App
