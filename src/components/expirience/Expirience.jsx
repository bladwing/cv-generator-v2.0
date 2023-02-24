import React from "react";
import ExpInputs from "./ExpInputs";
import ExpPreview from "./ExpPreview";

const expirience = () => {
  return (
    <div className="Side-Container">
      <h1>Expirience</h1>

      <div className="First-side">
        <ExpInputs />
      </div>
      <div className="Second-Side">
        <ExpPreview />
      </div>
    </div>
  );
};

export default expirience;
