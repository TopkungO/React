const initialState = {
  userData: {},
  isFerching: false,
  isError: false,
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return Object.assign({}, state, {
        isFerching: true,
        userData: {},
        isError: false,
      });

    case "FETCHED_USER":
      return Object.assign({}, state, {
        userData: action.data,
        isFerching: false,
        isError: false,
      });

    case "RECEIVE_ERROR":
      return Object.assign({}, state, {
        isError: true,
        isFerching: false,
      });

    default:
      return state;
  }
};

export default asyncReducer;
