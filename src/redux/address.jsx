const CONVERT = "address/CONVERT";
const RECEIVED = "address/RECEIVED";

export const convertAddress = address => ({
  type: SENT,
  address
});

const receivedAddress = json => ({
  type: RECEIVED,
  json
});

const sendAddress = address => {
  return dispatch => {
    dispatch(convertAddress(address));

    return fetch();
  };
};
