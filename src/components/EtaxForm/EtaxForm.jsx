import React from "react"
import EqualLayoutForm from "./components/EqualLayoutForm"
import Api from "../../services/api"
import Button from "material-ui/Button"
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

  submitForm = () => {
    Api.post("/address", this.state)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <EqualLayoutForm
          fields={ addressFields }
          handleChange={ this.handleChange }
        />
        <Button onClick={this.submitForm} variant="raised" color="primary">
          Submit
        </Button>
      </div>
    )
  }
}

export default EtaxForm
