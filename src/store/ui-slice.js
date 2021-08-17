import { createSlice } from '@reduxjs/toolkit';

const initialState = { issubmitButtonEnabled: true };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSubmitButton(state, action) {
      state.issubmitButtonEnabled = action.payload;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
