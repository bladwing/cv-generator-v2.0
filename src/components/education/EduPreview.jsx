import React from "react";
import ExpPreview from "../expirience/ExpPreview";


const EduPreview = ({
  educationCenter,
  selectQuality,
  endEduDate,
  eduDescription,
}) => {

  return (
    <div>
      <ExpPreview />

      <div className="Education-info">
      <h2>Education</h2>
        <h4>{educationCenter}, {selectQuality}</h4>
        <span>{endEduDate}</span>
        <p>{eduDescription}</p>
      </div>
    </div>
  );
};

export default EduPreview;
