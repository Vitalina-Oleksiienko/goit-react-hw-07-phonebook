import { createReducer, createSlice } from "@reduxjs/toolkit";
import { changeFilter } from "./action";
import { getThunkData, addThunkData, deleteThunkData } from "./operations";

const contactSlice = createSlice({
  name: "phonebook",
  initialState: {
    contact: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getThunkData.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [getThunkData.fulfilled]: (state, action) => ({
      ...state,
      contact: action.payload,
      loading: false,
    }),
    [getThunkData.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    [addThunkData.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [addThunkData.fulfilled]: (state, action) => {
      return {
        ...state,
        contact: [...state.contact, action.payload],
        loading: false,
      };
    },
    [addThunkData.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    [deleteThunkData.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [deleteThunkData.fulfilled]: (state, action) => ({
      ...state,
      contact: state.contact.filter(({ id }) => id !== action.payload),
      loading: false,
    }),
    [deleteThunkData.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});
export default contactSlice.reducer;

export const filterReducer = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});
