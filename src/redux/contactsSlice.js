import { createSlice } from "@reduxjs/toolkit";

const initialContactsState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContactsState,
  reducers: {
    addContact(state, action) {},
    deleteContact(state, action) {},
  },
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
