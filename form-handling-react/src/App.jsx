import React from 'react';
import FormikForm from './components/formikForm';

const App = () => {
  return (
    <div className="container">
      <h1 className="text-2xl font-semibold">User Registration Form</h1>
      <FormikForm />
      {/* If you have other components, you can include them here */}
    </div>
  );
};

export default App;
