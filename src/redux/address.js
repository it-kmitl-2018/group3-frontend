import { combineReducers } from "redux"
import api from "../services/api"

// Actions
export const SEND = "address/SEND"
export const RECEIVED = "address/RECEIVED"

// Action creators
export function sendAddress(address) {
  return {
    type: SEND,
    address,
  }
}

export function receivedAddress(json) {
  return {
    type: RECEIVED,
    json,
  }
}

export const sendAddresssIfNeeded = address => {
  return (dispatch, getState) => {
    if (!getState().isSending) {
      dispatch(sendAddress(address))

      return api.post("/address", address).then(response => {
        dispatch(receivedAddress(response.data))
      })
    }
  }
}

// Reducers
export function address(
  state = {
    isSending: false,
    exportData: {},
    address: {},
  },
  action
) {
  switch (action.type) {
  case SEND:
    return {
      ...state,
      isSending: true,
    }
  case RECEIVED:
    return {
      ...state,
      exportData: action.json,
      isSending: false,
    }
  default:
    return state
  }
}

const addressReducer = combineReducers({ address })
export default addressReducer
