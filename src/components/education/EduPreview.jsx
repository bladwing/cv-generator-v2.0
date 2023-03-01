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
        <h3>{educationCenter}</h3>
        <h4>{selectQuality}</h4>
        <h4>{endEduDate}</h4>
        <p>{eduDescription}</p>
      </div>
    </div>
  );
};

export default EduPreview;
