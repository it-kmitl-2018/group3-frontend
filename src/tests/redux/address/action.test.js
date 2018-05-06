import {
  SEND,
  RECEIVED,
  sendAddress,
  receivedAddress,
} from "../../../redux/address"
import { addressMock, responseMock } from "./mockValue"

describe("address action creator", () => {
  it("should create action to send", () => {
    const expectedAction = {
      type: SEND,
      address: addressMock,
    }

    expect(sendAddress(addressMock)).toEqual(expectedAction)
  })

  it("should create action to receive", () => {
    const expectedAction = {
      type: RECEIVED,
      json: responseMock,
    }

    expect(receivedAddress(responseMock)).toEqual(expectedAction)
  })
})
