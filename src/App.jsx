import React, { useState } from "react";
import LoginForm from "./components/Login/LoginForm";
import DisplayData from "./components/Display/DisplayData";

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div className="appContainer">
      {!submittedData ? (
        <div className="formWrapper">
          <LoginForm onSubmit={handleSubmit} />
        </div>
      ) : (
        <div className="displayWrapper">
          <DisplayData data={submittedData} />
        </div>
      )}
    </div>
  );
};

export default App;