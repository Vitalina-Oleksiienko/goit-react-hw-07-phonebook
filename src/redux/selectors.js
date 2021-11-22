import { createSelector } from "@reduxjs/toolkit";

export const getContact = (state) => state.contacts.contact;
export const getFilter = (state) => state.filter;

export const getFilteredContacts = createSelector(
  [getContact, getFilter],
  (items, filter) =>
    items.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
);
