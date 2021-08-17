import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    seleniumScript: '',
    browser: '',
    password: '',
    devcie: '',
    jiraVersion: '',
    headless: false,
    zephyr: false,
  },
};

const formdataSlice = createSlice({
  name: 'formdata',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.data = { ...state.data, ...action.payload };
    },
  },
});
export const formdataActions = formdataSlice.actions;
export default formdataSlice;
