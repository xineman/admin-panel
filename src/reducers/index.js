import {
  SET_CONTACTS,
  SET_CONTACTS_SUCCESS,
  SET_CONTACTS_FAIL,
  SET_ACTIVE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  SET_ONE_CONTACT_SUCCESS,
} from '../constants';

const store = {
  contacts: [],
  active: null,
  isLoaded: false,
  isLoading: false,
};

const contacts = (state = store, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, isLoaded: false, isLoading: true };
    case SET_CONTACTS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        contacts: action.payload,
      };
    case UPDATE_CONTACT_SUCCESS: {
      const updated = state.contacts.findIndex(c => c.id === action.payload.id);
      const con = [...state.contacts];
      con.splice(updated, 1, action.payload);
      return {
        ...state,
        contacts: con,
      };
    }
    case SET_ONE_CONTACT_SUCCESS: {
      return {
        ...state,
        contacts: [
          ...state.contacts,
          action.payload,
        ],
      };
    }
    case SET_CONTACTS_FAIL:
      return { ...state, isLoading: false };
    case SET_ACTIVE_CONTACT:
      return { ...state, active: action.payload.id };
    default:
      return state;
  }
};

export default contacts;
