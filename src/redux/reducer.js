import { v4 as uuidv4 } from "uuid";
import { createReducer } from "@reduxjs/toolkit";
import { contactSubmit, changeFilter, contactDelete } from "./action";

function addContact(state = {}, action) {
  if (!state.contacts.find((el) => el.name === action.payload[0])) {
    const data = [
      ...state.contacts,
      { name: action.payload[0], number: action.payload[1], id: uuidv4() },
    ];
    localStorage.setItem("contacts", JSON.stringify(data));
    return { ...state, contacts: data };
  } else {
    alert(`${action.payload[0]} is already in contacts`);
    return state;
  }
}

function filterContact(state = {}, action) {
  return { ...state, filter: action.payload };
}

function deleteContact(state = {}, action) {
  const data = state.contacts.filter((elem) => elem.id !== action.payload);
  localStorage.setItem("contacts", JSON.stringify(data));
  return { ...state, contacts: data };
}

export const reducer = createReducer(
  {},
  {
    [contactSubmit]: addContact,
    [changeFilter]: filterContact,
    [contactDelete]: deleteContact,
  }
);
