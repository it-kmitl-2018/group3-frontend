import React from "react"
import renderer from "react-test-renderer"

import EtaxForm from "../components/EtaxForm/EtaxForm"

it("renders correctly", () => {
  const tree = renderer.create(<EtaxForm />).toJSON()
  expect(tree).toMatchSnapshot()
})
