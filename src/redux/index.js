import { createStore, applyMiddleware, combineReducers } from "redux"
import thunkMiddleware from "redux-thunk"
import { createLogger } from "redux-logger"
import addressReducer from "./address"

const rootReducer = combineReducers({
  addressReducer,
})

const loggerMiddleware = createLogger()

export default createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)
