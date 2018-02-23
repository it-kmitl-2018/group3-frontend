import _ from "lodash"

/**
 * A json config for Address fields
 *
 * @FormConfig
 */
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

/**
 * Generate object that has {id} as key and {""} as value
 * Example. {houseNo: "", villege: "", ...}
 */
const addressFieldsState = _.zipObject(
  addressFields.map(field => field.id),
  _.map(addressFields, _.constant(""))
)

export { addressFieldsState, addressFields }
