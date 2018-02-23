import React from "react"
import EqualLayoutForm from "./components/EqualLayoutForm"
import { addressFieldsState, addressFields } from "./AddressFields.config"

class EtaxForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...addressFieldsState }
  }

  render() {
    return <EqualLayoutForm fields={ addressFields } />
  }
}

export default EtaxForm
