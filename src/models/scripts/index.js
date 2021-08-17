import axios from 'lib/axios';
import { uiActions } from 'store/ui-slice';
import { scriptListActions } from 'store/scriptlist-slice';
import { logger } from '../../../server/lib/logger';

// Redux Thunk - which executes the returned functiuon at a later time
export const fetchScripts = () => {
  return dispatch => {
    const fetchList = async () => {
      dispatch(
        uiActions.setNotification({
          status: 'pending',
          message: 'Fetching the list of scripts',
          title: 'Fetching Script List...',
        }),
      );
      const response = await axios.get('/api/scripthandler');
      dispatch(
        uiActions.setNotification({
          status: 'success',
          message: 'List fetched successfully',
          title: 'List Retrieved',
        }),
      );
      return response.data;
    };
    fetchList()
      .then(data => {
        dispatch(scriptListActions.setScriptList(data));
      })
      .catch(error => {
        dispatch(
          uiActions.setNotification({
            status: 'error',
            message: error,
            title: 'Error!',
          }),
        );
      });
  };
};

export const sendScriptData = scriptName => {
  return dispatch => {
    const fetchList = async () => {
      dispatch(
        uiActions.setNotification({
          status: 'pending',
          message: 'sending script data',
          title: 'Sending Data...',
        }),
      );
      await axios.post(`/api/scripthandler/${scriptName}`);
      dispatch(
        uiActions.setNotification({
          status: 'success',
          message: 'Script Data sent successfully',
          title: 'Data Sent successfully',
        }),
      );
    };
    fetchList(scriptName)
      .then(() => {
        logger.info('Executing Test...');
      })
      .catch(error => {
        dispatch(
          uiActions.setNotification({
            status: 'error',
            message: error,
            title: 'Error!',
          }),
        );
      });
  };
};
