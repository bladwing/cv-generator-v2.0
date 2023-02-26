import React, { useState } from "react";
import ExpInputs from "./ExpInputs";
import ExpPreview from "./ExpPreview";
import Header from "../Header";

const Expirience = () => {
  const [positionValue, setPositionValue] = useState("");
  const [companyValue, setCompanyValue] = useState("");
  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");
  const [jobDescriptionValue, setJobDescriptionValue] = useState("");

  const [header] = useState("Expirience")
  const [backLink] = useState("/personal")

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
      <Header header={header} backLink={backLink}/>
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
