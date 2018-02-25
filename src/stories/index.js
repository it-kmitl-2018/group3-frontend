/* eslint-disable import/no-extraneous-dependencies */
import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import { storiesOf } from "@storybook/react"
import Example from "../components/Example"

storiesOf("Components", module).add("Example", () => <Example />)
