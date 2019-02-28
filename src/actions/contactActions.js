import * as actionTypes from "./types";

export const getContacts = () => {
  return {
    type: actionTypes.GET_CONTACTS
  };
};
export const deleteContact = id => {
  return {
    type: actionTypes.DELETE_CONTACT,
    payload: id
  };
};
export const addContact = contact => {
  return {
    type: actionTypes.ADD_CONTACT,
    payload: contact
  };
};
