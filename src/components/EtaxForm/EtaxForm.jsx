import React from "react"
import Button from "material-ui/Button"
import EqualLayoutForm from "./EqualLayoutForm"
import ProvinceDropdown from "../ProvinceDropdown/ProvinceDropdown"
import Api from "../../services/api"
import { addressFieldsState, addressFields } from "./AddressFields.config"

/**
 * EtaxForm is a component that handle
 * all form input.
 *
 * @class EtaxForm
 * @extends {React.Component}
 */
class EtaxForm extends React.Component {
  state = { ...addressFieldsState }

  style = {
    provinceSelectorStyle: {
      marginTop: "25px",
    },
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submitForm = () => {
    Api.post("/address", this.state).catch(err => console.log(err))
  }

  handleProvinceChange = val => {
    console.log(val)
    //TODO: send the value to backend api
  }

  render() {
    return (
      <div>
        <EqualLayoutForm
          name="Address Form"
          fields={ addressFields }
          handleChange={ this.handleChange }
        />
        <div className="row container">
          <div className="col-4" style={ this.style.provinceSelectorStyle }>
            <ProvinceDropdown onChange={ this.handleProvinceChange } />
          </div>
        </div>
        <Button onClick={ this.submitForm } variant="raised" color="primary">
          Submit
        </Button>
      </div>
    )
  }
}

export default EtaxForm
