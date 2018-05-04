/* eslint-disable import/no-extraneous-dependencies */
import { getAll, getOne, create, update } from '@api/contacts';
import { toCamelcase, fromCamelcase } from '@utils';
import {
  SET_CONTACTS,
  SET_CONTACTS_SUCCESS,
  SET_ACTIVE_CONTACT,
  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  SET_ONE_CONTACT,
  SET_ONE_CONTACT_SUCCESS,
} from '../constants';


export const getContacts = () => (dispatch) => {
  dispatch({ type: SET_CONTACTS });
  getAll()
    .then(contacts => contacts.map(c => toCamelcase(c)))
    .then(payload => dispatch({ type: SET_CONTACTS_SUCCESS, payload }));
};

export const getOneContact = id => (dispatch) => {
  dispatch({ type: SET_ONE_CONTACT });
  getOne(id)
    .then(payload => dispatch({ type: SET_ONE_CONTACT_SUCCESS, payload }));
};

export const createContact = () => (dispatch) => {
  dispatch({ type: SET_CONTACTS });
  create()
    .then(payload => dispatch({ type: SET_CONTACTS_SUCCESS, payload }));
};

export const updateContact = contact => (dispatch) => {
  dispatch({ type: UPDATE_CONTACT });
  update(fromCamelcase(contact))
    .then(payload => dispatch({ type: UPDATE_CONTACT_SUCCESS, payload: toCamelcase(payload) }));
};

export const selectContact = contact => (dispatch) => {
  dispatch({
    type: SET_ACTIVE_CONTACT,
    payload: {
      id: contact.id,
    },
  });
};
