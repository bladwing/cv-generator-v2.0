import React, { useState } from "react";
import EduInputs from "./EduInputs";
import EduPreview from "./EduPreview";
import Headers from "../header/Header";

const Educations = () => {
  const [educationCenterValue, setEducationCenterValue] = useState("");
  const [selectQualityValue, setSelectQualityValue] = useState("");
  const [endEduDateValue, setEndEduDateValue] = useState("");
  const [eduDescriptionValue, setEduDescriptionValue] = useState("");

  const [header] = useState("Education")
  const [page] = useState("1/3")


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
      <div className="First-Side">
      <Headers header={header} page={page}/>
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
