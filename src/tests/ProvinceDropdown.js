import React from "react"
import renderer from "react-test-renderer"

import ProvinceDropdown from "../components/ProvinceDropdown/ProvinceDropdown"

it("renders the province dropdown component correctly", () => {
  const tree = renderer.create(<ProvinceDropdown />).toJSON()
  expect(tree).toMatchSnapshot()
})
