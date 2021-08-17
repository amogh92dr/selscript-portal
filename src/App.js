import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { fetchScripts } from 'models/scripts';
import ErrorBoundary from 'components/ErrorBoundary';
import InputForm from './sections/InputForm';

const App = () => {
  try {
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
  } catch (e) {
    return <ErrorBoundary error={e} />;
  }
};

export default App;
