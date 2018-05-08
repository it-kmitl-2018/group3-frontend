import api from "../services/api"

// Actions
export const SEND = "address/SEND"
export const RECEIVED = "address/RECEIVED"

// Action creators
export function sendAddress(address) {
  return {
    type: SEND,
    payload: {
      address,
    },
  }
}

export function receivedAddress(json) {
  return {
    type: RECEIVED,
    payload: {
      json,
    },
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
export default function addressReducer(
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
      exportData: action.payload.json,
      isSending: false,
    }
  default:
    return state
  }
}
