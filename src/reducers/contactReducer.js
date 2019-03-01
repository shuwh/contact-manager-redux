import * as actionTypes from "../actions/types";

const initState = {
  contacts: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case actionTypes.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case actionTypes.ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};
