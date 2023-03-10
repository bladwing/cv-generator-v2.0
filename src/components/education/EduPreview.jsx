import React from "react";
import ExpPreview from "../expirience/ExpPreview";


const EduPreview = ({
  educationCenter,
  selectQuality,
  endEduDate,
  eduDescription,
}) => {



  
const Style = {
  display: educationCenter === "" ? "none" : "block" 
}


  return (
    <div>
      <ExpPreview />

      <div className="Education-info">
      <h2 style={Style}>Education</h2>
        <h4 style={Style}>{educationCenter}, {selectQuality}</h4>
        <span>{endEduDate}</span>
        <p>{eduDescription}</p>
      </div>
    </div>
  );
};

export default EduPreview;
