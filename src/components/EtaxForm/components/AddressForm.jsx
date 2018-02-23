import React from "react"
import TextField from "material-ui/TextField"
import PropTypes from "prop-types"

const AddressForm = props => (
  <div className="row">
    {props.fields.map(field => (
      <TextField
        key={ field.id }
        id={ field.id }
        label={ field.label }
        helperText={ field.helperText }
        margin={ field.margin }
        required={ field.required }
      />
    ))}
  </div>
)

AddressForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      helperText: PropTypes.string,
      margin: PropTypes.string,
      required: PropTypes.bool,
    })
  ),
}

AddressForm.defaultProps = {
  fields: [
    {
      id: "houseNo",
      label: "House No.",
      helperText: "Your House Number",
      margin: "normal",
      required: true,
    },
  ],
}

export default AddressForm
