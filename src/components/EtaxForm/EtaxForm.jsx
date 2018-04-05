import React from "react"
import Button from "material-ui/Button"
import styled from "styled-components"
import CountrySelector from "react-geoidentify-country-selector"
import EqualLayoutForm from "./EqualLayoutForm"
import ProviceDropdown from "../ProvinceDropdown/ProvinceDropdown"
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

  getSelectedCountry(coutryObject) {
    console.log(coutryObject)
    /*
        {
            countryName: "Palau",
            ISOALPHA2Code: "PW",
            ISOALPHA3Code: "PLW",
            ISONumericalCode: 585
        }
     */
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submitForm = () => {
    Api.post("/address", this.state)
      .then()
      .catch()
  }

  render() {
    const countrySelectorStyle = {
      marginTop: "25px",
    }

    const provinceSelectorStyle = {
      marginTop: "25px",
    }

    return (
      <div>
        <EqualLayoutForm
          name="Address Form"
          fields={ addressFields }
          handleChange={ this.handleChange }
        />
        <div className="row container">
          <div className="col-4" style={ provinceSelectorStyle }>
            <ProviceDropdown />
          </div>
          <div className="col-4" style={ countrySelectorStyle }>
            <CountrySelector
              defaultCountry="Georgia"
              getSelectedCountry={ coutryObject =>
                this.getSelectedCountry(coutryObject)
              }
            />
            <div className="MuiFormHelperText-root-30">ex. Thailand</div>
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
