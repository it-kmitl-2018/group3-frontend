import addressReducer, { SEND, RECEIVED } from "../../../redux/address"
import { addressMock, responseMock } from "./mockValue"

describe("address reducer", () => {
  it("should return the initial state", () => {
    expect(addressReducer(undefined, {})).toEqual({
      address: {},
      exportData: {},
      isSending: false,
    })
  })

  it("should return the sending state", () => {
    expect(
      addressReducer(undefined, {
        payload: {
          address: addressMock,
        },
        type: SEND,
      })
    ).toEqual({
      address: {},
      exportData: {},
      isSending: true,
    })
  })

  it("should return the received state", () => {
    expect(
      addressReducer(undefined, {
        payload: {
          json: responseMock,
        },
        type: RECEIVED,
      })
    ).toEqual({
      address: {},
      exportData: responseMock,
      isSending: false,
    })
  })
})
