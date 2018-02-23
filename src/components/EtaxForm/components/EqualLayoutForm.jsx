import React from "react"
import TextField from "material-ui/TextField"
import PropTypes from "prop-types"

const EqualLayoutForm = props => (
  <div className="row col-12">
    {props.fields.map(field => (
      <div className="col-4">
        <TextField
          className="col-12"
          key={ field.id }
          id={ field.id }
          label={ field.label }
          helperText={ field.helperText }
          margin={ field.margin }
          required={ field.required }
          onChange={ props.handleChange(field.id) }
        />
      </div>
    ))}
  </div>
)

EqualLayoutForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      helperText: PropTypes.string,
      margin: PropTypes.string,
      required: PropTypes.bool,
    })
  ),
  handleChange: PropTypes.func.isRequired,
}

EqualLayoutForm.defaultProps = {
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

export default EqualLayoutForm