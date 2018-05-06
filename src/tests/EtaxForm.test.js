import React from "react"
import renderer from "react-test-renderer"

import EtaxForm from "../components/EtaxForm/EtaxForm"

function submitFormMock() {}

it("renders correctly", () => {
  const tree = renderer
    .create(<EtaxForm submitForm={ submitFormMock } />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
