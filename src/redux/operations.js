import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://619b5c172782760017445539.mockapi.io";

export const getThunkData = createAsyncThunk(
  "getContact",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addThunkData = createAsyncThunk(
  "addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteThunkData = createAsyncThunk(
  "deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      const {
        data: { id },
      } = await axios.delete(`/contacts/${contactId}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
