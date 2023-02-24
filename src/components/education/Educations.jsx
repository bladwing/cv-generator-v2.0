import React, { useState } from "react";
import EduInputs from "./EduInputs";
import EduPreview from "./EduPreview";

const Educations = () => {
  const [educationCenterValue, setEducationCenterValue] = useState("");
  const [selectQualityValue, setSelectQualityValue] = useState("");
  const [endEduDateValue, setEndEduDateValue] = useState("");
  const [eduDescriptionValue, setEduDescriptionValue] = useState("");

  const DataReceiver = ({
    educationCenter,
    selectQuality,
    endEduDate,
    eduDescription,
  }) => {
    setSelectQualityValue(selectQuality);
    setEducationCenterValue(educationCenter);
    setEndEduDateValue(endEduDate);
    setEduDescriptionValue(eduDescription);
  };

  return (
    <div className="Side-Container">
      <h1>Education</h1>
      <div className="First-Side">
        <EduInputs onChange={DataReceiver} />
      </div>
      <div className="Second-Side">
        <EduPreview
          educationCenter={educationCenterValue}
          selectQuality={selectQualityValue}
          endEduDate={endEduDateValue}
          eduDescription={eduDescriptionValue}
        />
      </div>
    </div>
  );
};

export default Educations;