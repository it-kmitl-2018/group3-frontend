import React from "react"
import TextField from "material-ui/TextField"
import PropTypes from "prop-types"

/**
 * EqualLayoutForm is a general purpose
 * group of inputs that equally spread layout.
 * @PureComponent
 */
const EqualLayoutForm = props => (
  <div className="row col-12">
    {props.fields.map(({ id, ...fields }) => (
      <div className="col-4" key={ id }>
        <TextField
          className="col-12"
          id={ id }
          onChange={ props.handleChange(id) }
          { ...fields }
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
