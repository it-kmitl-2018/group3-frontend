import { combineReducers } from "redux"
import api from "../services/api"

// Actions
const SEND = "address/SEND"
const RECEIVED = "address/RECEIVED"

// Action creators
export function sendAddress(address) {
  return {
    type: SEND,
    address,
  }
}

function receivedAddress(json) {
  return {
    type: RECEIVED,
    json,
  }
}

function sendAddresss(address) {
  return dispatch => {
    dispatch(sendAddress(address))

    return api.post("/address", address).then(response => {
      console.log(response)
      dispatch(receivedAddress(response))
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
function address(
  state = {
    isSending: false,
    exportData: "",
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
