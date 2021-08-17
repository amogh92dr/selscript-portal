import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { fetchScripts } from 'models/scripts';
import InputForm from './sections/InputForm';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchScripts());
  }, [dispatch]);

  return (
    <div className="flex flex-column sectionWrapper justify-between">
      <Header />
      <InputForm />
      <Footer />
    </div>
  );
};

export default App;
