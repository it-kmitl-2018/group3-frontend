import _ from "lodash"

/**
 * A json config for Address fields
 *
 * @FormConfig
 */
const addressFields = [
  {
    id: "postCode",
    label: "รหัสไปรษณีย์",
    helperText: "ex. 11120, 10520",
    margin: "normal",
    required: false,
  },
  {
    id: "buildingName",
    label: "ชื่ออาคาร",
    helperText: "ex. อาคารเรียนรวมเทคโนโลยีสารสนเทศ",
    margin: "normal",
    required: false,
  },
  {
    id: "buildingNumber",
    label: "หมายเลขอาคาร",
    helperText: "ex. 3",
    margin: "normal",
    required: false,
  },
  {
    id: "houseNumber",
    label: "หมายเลขห้อง",
    helperText: "ex. 2/112, 4",
    margin: "normal",
    required: false,
  },
  {
    id: "suiteNumber",
    label: "หมายเลขอาคาร",
    helperText: "ex. 1, 3",
    margin: "normal",
    required: false,
  },
  {
    id: "soi",
    label: "ซอย",
    helperText: "ex. ลาดกระบัง 50/2",
    margin: "normal",
    required: false,
  },
  {
    id: "villege",
    label: "หมู่บ้าน",
    helperText: "ex. หมู่บ้านทรายทอง",
    margin: "normal",
    required: false,
  },
  {
    id: "moo",
    label: "หมู่",
    helperText: "ex. หมู่ 4",
    margin: "normal",
    required: false,
  },
  {
    id: "streetName",
    label: "ถนน",
    helperText: "ex. ถนนลาดกระบัง",
    margin: "normal",
    required: false,
  },
  {
    id: "cityName",
    label: "จังหวัด",
    helperText: "ex. นนทบุรี",
    margin: "normal",
    required: false,
  },
  {
    id: "citySubDivisionName",
    label: "อำเภอ/เขต",
    helperText: "ex. หมู่ 4",
    margin: "normal",
    required: false,
  },
  {
    id: "countrySubDivisionID",
    label: "รหัสย่อยประเทศ",
    helperText: "",
    margin: "normal",
    required: false,
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
