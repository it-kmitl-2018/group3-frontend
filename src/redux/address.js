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

function sendAddresss(address) {
  return dispatch => {
    dispatch(sendAddress(address))

    return api.post("/address", address).then(response => {
      dispatch(receivedAddress(response.data))
    })
  }
}

export const sendAddresssIfNeeded = address => {
  return (dispatch, getState) => {
    if (!getState().isSending) {
      return dispatch(sendAddresss(address))
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
