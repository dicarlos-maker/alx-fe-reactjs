import React from 'react';
// import RegistrationForm from './components/RegistrationForm';  // Controlled Component Form
import FormikForm from './components/FormikForm';  // Formik Form

function App() {
  return (
    <div className="App">
      <h1>User Registration</h1>
      {/* <RegistrationForm /> Uncomment this to use Controlled Component form */}
      <FormikForm /> {/* Uncomment this to use Formik form */}
    </div>
  );
}

export default App;
