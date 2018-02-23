import React from "react"
import AddressForm from "./components/AddressForm"

class EtaxForm extends React.Component {
  state = {}

  render() {
    return <AddressForm fields={ fields } />
  }
}

const fields = [
  {
    id: "houseNo",
    label: "House No.",
    helperText: "Your House Number",
    margin: "normal",
    required: true,
  },
  {
    id: "villege",
    label: "Villege",
    helperText: "Your Villege Name",
    margin: "normal",
    required: false,
  },
  {
    id: "postCode",
    label: "Post Code",
    helperText: "Your Post Code",
    margin: "normal",
    required: true,
  },
]

export default EtaxForm
