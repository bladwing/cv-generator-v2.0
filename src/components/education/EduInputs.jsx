import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

const EduInputs = ({ onChange }) => {
  const [educationCenter, setEducationCenter] =
    useLocalStorage("educationCenter");
  const [selectQuality, setSelectQuality] = useLocalStorage("selectQuality");
  const [endEduDate, setEndEduDate] = useLocalStorage("endEduDate");
  const [eduDescription, setEduDescription] = useLocalStorage("eduDescription");

  useEffect(() => {
    handleLiveView();
  });

  const handleLiveView = () => {
    onChange({ educationCenter, selectQuality, endEduDate, eduDescription });
  };

  return (
    <form action="">
      <table>
        <thead>
          <tr>
            <td className="Long-inputs-field">
              <label htmlFor="">Education </label>
              <input
                type="text"
                value={educationCenter}
                name=""
                id=""
                onChange={(e) => setEducationCenter(e.target.value)}
              />
              <span>minimum 2 symbol</span>
            </td>
          </tr>
          <tr className="Short-inputs-Container">
            <td className="Short-inputs-Select">
              <label htmlFor="">Choose Quality</label>
              <select
                type=""
                name=""
                id=""
                onChange={(e) => setSelectQuality(e.target.value)}
              >
                <option value="">---</option>
                <option value="test">Test</option>
              </select>
            </td>
            <td className="Short-inputs-field">
              <label htmlFor="">End Date</label>
              <input
                type="date"
                value={endEduDate}
                name=""
                id=""
                onChange={(e) => setEndEduDate(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="Desctiption">
              <label htmlFor="">Description</label>
              <textarea
                name=""
                value={eduDescription}
                id=""
                cols="30"
                rows="10"
                onChange={(e) => setEduDescription(e.target.value)}
              ></textarea>
            </td>
          </tr>
        </thead>
      </table>
      <div className="button-container">
      <Link to="/expirience">Previous</Link>
        <button>Next</button>
        
      </div>
    </form>
  );
};

export default EduInputs;