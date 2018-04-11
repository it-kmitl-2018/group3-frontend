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

  style = {
    formControl: {
      textAlign: "left",
    },
    select: {
      padding: 0,
    },
  }

  handleProvinceChange = event => {
    const province = event.target.value
    this.setState({ province: province })
    this.props.onChange(province)
  }

  render() {
    return (
      <div>
        <FormControl className="col-12" style={ this.style.formControl }>
          <InputLabel htmlFor="province">จังหวัด</InputLabel>
          <Select
            inputProps={ {
              name: "province",
              id: "province",
            } }
            value={ this.state.province }
            onChange={ this.handleProvinceChange }
            label="จังหวัด"
            style={ this.style.select }
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
  onChange: PropTypes.func.isRequired,
}
