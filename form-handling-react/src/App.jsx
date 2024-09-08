import React from 'react';
import FormikForm from './components/formikForm';

const App = () => {
  return (
    <div className="container">
      <h1 className="text-2xl font-semibold">Recipe Sharing App</h1>
      <FormikForm />
    </div>
  );
};

export default App;