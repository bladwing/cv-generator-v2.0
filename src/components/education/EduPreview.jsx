import React from "react";
import PerPreviw from "../personal/PerPreview";
import ExpPreview from "../expirience/ExpPreview";

const EduPreview = ({
  educationCenter,
  selectQuality,
  endEduDate,
  eduDescription,
}) => {
  return (
    <div>
      <PerPreviw />
      <ExpPreview />

      <div className="Education-info">
        <h3>{educationCenter}</h3>
        <h3>{selectQuality}</h3>
        <h3>{endEduDate}</h3>
        <p>{eduDescription}</p>
      </div>
    </div>
  );
};

export default EduPreview;
