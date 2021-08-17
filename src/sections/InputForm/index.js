import React from 'react';
import { Input, Checkbox } from '@catapulthealth/catapult-react-components';
import FloatyButton from 'components/FloatyButton';
import Select from 'components/Select';
import { useDispatch, useSelector } from 'react-redux';
import { formdataActions } from 'store/formdata-slice';
import { sendScriptData } from 'models/scripts';
import styles from './InputForm.module.css';

const deviceOptions = [
  {
    value: 'iphone11',
    label: 'iPhone 11',
  },
];

const selectorMapper = selArray => {
  return selArray.map(val => {
    return {
      value: val,
      label: val,
    };
  });
};
const InputForm = () => {
  const dispatch = useDispatch();
  const selscriptArray = useSelector(state => state.scriptdetail);
  const formData = useSelector(state => state.formdata);
  const selscriptOptions = selscriptArray && selectorMapper(selscriptArray.scriptList);
  const selScriptSelectorHandler = event => {
    dispatch(
      formdataActions.setFormData({
        seleniumScript: event.value,
      }),
    );
  };
  const inputChangeHandler = event => {
    switch (event.target.id) {
      case 'browser':
        dispatch(
          formdataActions.setFormData({
            browser: event.target.value,
          }),
        );
        break;
      case 'password':
        dispatch(
          formdataActions.setFormData({
            password: event.target.value,
          }),
        );
        break;
      case 'jiraversion':
        dispatch(
          formdataActions.setFormData({
            jiraVersion: event.target.value,
          }),
        );
        break;

      default:
        break;
    }
    dispatch(
      formdataActions.setFormData({
        browser: event.target.value,
      }),
    );
  };
  const submitButtonHandler = () => {
    dispatch(sendScriptData(formData.data.seleniumScript));
  };
  return (
    <form className={`px2 flex flex-wrap ${styles.form}`}>
      <section className={`formSectionTitle h2 bold col-12 ${styles.section}`}>
        <p>This is the Selenium Script Portal. Enjoy!!</p>
      </section>
      <section
        className={`col col-12 md-col-4 lg-col-3 border-box mb2 px3 inputContainer ${styles.section}`}
      >
        <div>Select Selenium Script</div>
        <Select id="selscript" options={selscriptOptions} onChange={selScriptSelectorHandler} />
      </section>
      <section className={`flex-auto ${styles.section}`}>
        <div className="col col-12 md-col-4 lg-col-3 border-box mb2 px3 inputContainer">
          <Input
            id="browser"
            label="Browser"
            labelClasses="col-12 h4"
            inputClasses={`col-12 ${styles.input}`}
            maxLength={255}
            value={formData.data.browser}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="col col-12 md-col-4 lg-col-3 border-box mb2 px3 inputContainer">
          <Input
            id="password"
            label="Password"
            labelClasses="col-12 h4"
            inputClasses={`col-12 ${styles.input}`}
            maxLength={255}
            value={formData.data.password}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="col col-12 md-col-4 lg-col-3 border-box mb2 px3 inputContainer">
          <div>Device</div>
          <Select id="device" options={deviceOptions} />
        </div>
        <div className="col col-12 md-col-4 lg-col-3 border-box mb2 px3 inputContainer">
          <Input
            id="jiraversion"
            label="JIRA Version"
            labelClasses="col-12 h4"
            inputClasses={`col-12 ${styles.input}`}
            maxLength={255}
            value={formData.jiraVersion}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="col col-12 md-col-4 lg-col-3 border-box mb2 px3 inputContainer">
          <Checkbox id="headless" label="Run Headless?" className="px1" large onClick={() => {}} />
          <Checkbox
            id="zephyr"
            label="Run Zephyr Tests?"
            className="px1"
            large
            onClick={() => {}}
          />
        </div>
      </section>
      <section className={`flex-auto ${styles.section}`}>
        <div className="center my3">
          <FloatyButton
            id="runtestbutton"
            extraClasses="bg-blue white uppercase primary-border mb2"
            onClick={submitButtonHandler}
          >
            Run Test!
          </FloatyButton>
        </div>
      </section>
    </form>
  );
};

export default InputForm;
