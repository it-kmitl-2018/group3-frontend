import React from "react"
import EqualLayoutForm from "./components/EqualLayoutForm"
import { addressFieldsState, addressFields } from "./AddressFields.config"

class EtaxForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...addressFieldsState }
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    return (
      <EqualLayoutForm
        fields={ addressFields }
        handleChange={ this.handleChange }
      />
    )
  }
}

export default EtaxForm
