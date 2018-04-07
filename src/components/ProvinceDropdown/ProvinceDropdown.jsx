import React from "react"
import Select from "material-ui/Select"
import PropTypes from "prop-types"
import { MenuItem } from "material-ui/Menu"
import { InputLabel } from "material-ui/Input"
import { FormControl, FormHelperText } from "material-ui/Form"
import ProvinceDropdownData from "./province.data"

export default class ProvinceDropdown extends React.Component {
  state = {
    province: "",
  }

  handleProvinceChange = event => {
    this.setState({ province: event.target.value }, () => {
      this.props.onchange(this.state.province)
    })
  }

  render() {
    const formControl = {
      textAlign: "left",
    }

    const select = {
      padding: 0,
    }

    return (
      <div>
        <FormControl className="col-12" style={ formControl }>
          <InputLabel htmlFor="province">จังหวัด</InputLabel>
          <Select
            inputProps={ {
              name: "province",
              id: "province",
            } }
            value={ this.state.province }
            onChange={ this.handleProvinceChange }
            label="จังหวัด"
            style={ select }
            className="col-12"
          >
            {ProvinceDropdownData.map(province => (
              <MenuItem key={ province.code } value={ province.code }>
                {province.title_th}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>ex. กรุงเทพ</FormHelperText>
        </FormControl>
      </div>
    )
  }
}

ProvinceDropdown.propTypes = {
  onchange: PropTypes.func.isRequired,
}
