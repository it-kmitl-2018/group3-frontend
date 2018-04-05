import React from "react"
import Select from "material-ui/Select"
import { MenuItem } from "material-ui/Menu"
import { InputLabel } from "material-ui/Input"
import { FormControl, FormHelperText } from "material-ui/Form"
import ProvinceDropdownData from "./province.data"

export default class ProvinceDropdown extends React.Component {
  state = {
    province: "",
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state.province)
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
            onChange={ this.handleChange }
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
