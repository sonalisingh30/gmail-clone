import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    open: false,
    emails: [],
    selectedEmail: null,
    searchText: "",
    user: null,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },

    setEmails: (state, action) => {
      state.emails = action.payload;
    },
    setselectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setOpen, setEmails, setselectedEmail, setSearchText, setUser } =
  appSlice.actions;
export default appSlice.reducer;
