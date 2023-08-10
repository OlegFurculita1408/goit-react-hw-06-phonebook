import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const contactsInitialState = { items: [] };

const contactSlice = createSlice({
  name: 'phone',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      console.log(state.items)
      state.items.push(action.payload);
      toast.success(`Create Contact`, {position: toast.POSITION.TOP_LEFT});

    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      toast.warning(`Delete user!`, {position: toast.POSITION.TOP_LEFT});
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;