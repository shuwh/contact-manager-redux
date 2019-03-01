import * as actionTypes from "./types";
import axios from 'axios';

export const getContacts = () => async (dispatch, getState) => {
  const res = await axios.get('http://jsonplaceholder.typicode.com/users');
  dispatch({
    type: actionTypes.GET_CONTACTS,
    payload: res.data,
  })
}

export const deleteContact = id => async dispatch => {
  await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: actionTypes.DELETE_CONTACT,
    payload: id
  });
};
export const addContact = contact => async dispatch => {
  const res = await axios.post('http://jsonplaceholder.typicode.com/users/', contact)
  dispatch({
    type: actionTypes.ADD_CONTACT,
    payload: res.data
  });
};
