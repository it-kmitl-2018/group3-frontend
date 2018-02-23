import _ from "lodash"

const addressFields = [
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
  {
    id: "province",
    label: "Province",
    helperText: "Your Province",
    margin: "normal",
    required: true,
  },
  {
    id: "district",
    label: "District",
    helperText: "Your District",
    margin: "normal",
    required: true,
  },
  {
    id: "country",
    label: "Country",
    helperText: "Your Country Name",
    margin: "normal",
    required: true,
  },
]

const addressFieldsState = _.zipObject(
  addressFields.map(field => field.id),
  _.map(addressFields, _.constant(""))
)

export { addressFieldsState, addressFields }
