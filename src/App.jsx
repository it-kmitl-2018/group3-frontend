import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createLogger } from "redux-logger"
import "bootstrap/dist/css/bootstrap.min.css"
import addressReducer from "./redux/address"
import Home from "./containers/Home"

const loggerMiddleware = createLogger()

const store = createStore(
  addressReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)

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
