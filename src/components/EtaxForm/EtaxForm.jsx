import React from "react"
import EqualLayoutForm from "./components/EqualLayoutForm"
import {
  addressFieldsState,
  addressFields,
} from "./configs/AddressFields.config"

/**
 * EtaxForm is a component that handle
 * all form input.
 *
 * @class EtaxForm
 * @extends {React.Component}
 */
class EtaxForm extends React.Component {
  state = { ...addressFieldsState }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    return (
      <EqualLayoutForm
        name="Address Form"
        fields={ addressFields }
        handleChange={ this.handleChange }
      />
    )
  }
}

export default EtaxForm
