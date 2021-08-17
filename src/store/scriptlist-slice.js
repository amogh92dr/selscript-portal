import { createSlice } from '@reduxjs/toolkit';

const initialState = { scriptList: [] };
const scriptListSlice = createSlice({
  name: 'scriptdetail',
  initialState,
  reducers: {
    setScriptList(state, action) {
      state.scriptList = action.payload;
    },
  },
});

export const scriptListActions = scriptListSlice.actions;
export default scriptListSlice;
