import { configureStore } from '@reduxjs/toolkit';
import formdataSlice from './formdata-slice';
import scriptlistSlice from './scriptlist-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    scriptdetail: scriptlistSlice.reducer,
    formdata: formdataSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
