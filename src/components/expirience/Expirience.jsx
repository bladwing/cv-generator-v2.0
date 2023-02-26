import React, { useState } from "react";
import ExpInputs from "./ExpInputs";
import ExpPreview from "./ExpPreview";
import Header from "../header/Header";

const Expirience = () => {
  const [positionValue, setPositionValue] = useState("");
  const [companyValue, setCompanyValue] = useState("");
  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");
  const [jobDescriptionValue, setJobDescriptionValue] = useState("");

  const [header] = useState("Expirience")
  const [page] = useState("1/2")

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
      <div className="First-Side">
      <Header header={header} page={page}/>
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
