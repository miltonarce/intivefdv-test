const initialState = {
  name: "",
  position: "",
  age: "",
};

const filters = (state = initialState, {type, payload}) => {
  switch (type) {
    case "filters/NAME_FILTER_CHANGED":
      return {
        ...state,
        name: payload,
      };
    case "filters/POSITION_FILTER_CHANGED":
      return {
        ...state,
        position: payload,
      };
    case "filters/AGE_FILTER_CHANGED":
      return {
        ...state,
        age: payload,
      };
    default:
      return state;
  }
};

export default filters;
