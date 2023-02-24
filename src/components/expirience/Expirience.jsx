import React, { useState } from "react";
import ExpInputs from "./ExpInputs";
import ExpPreview from "./ExpPreview";

const Expirience = () => {
  const [positionValue, setPositionValue] = useState("");
  const [companyValue, setCompanyValue] = useState("");
  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");
  const [jobDescriptionValue, setJobDescriptionValue] = useState("");

  const DataReceiver = (
    position,
    company,
    startDate,
    endDate,
    jobDescription
  ) => {
    setPositionValue(position);
    setCompanyValue(company);
    setStartDateValue(startDate);
    setEndDateValue(endDate);
    setJobDescriptionValue(jobDescription);
  };

  return (
    <div className="Side-Container">
      <h1>Expirience</h1>

      <div className="First-Side">
        <ExpInputs onChange={DataReceiver} />
      </div>
      <div className="Second-Side">
        <ExpPreview
          position={positionValue}
          company={companyValue}
          startDate={startDateValue}
          endDate={endDateValue}
          jobDescription={jobDescriptionValue}
        />
      </div>
    </div>
  );
};

export default Expirience;
