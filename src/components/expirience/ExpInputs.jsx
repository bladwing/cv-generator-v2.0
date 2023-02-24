import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

const ExpInputs = ({ onChange }) => {
  const [position, setPosition] = useLocalStorage("position");
  const [company, setCompany] = useLocalStorage("company");
  const [startDate, setStartDate] = useLocalStorage("startDate");
  const [endDate, setEndDate] = useLocalStorage("endDate");
  const [jobDescription, setJobDescription] = useLocalStorage("jobDescription");

  useEffect(() => {
    handleLiveView();
  });

  const handleLiveView = () => {
    onChange({ position, company, startDate, endDate, jobDescription });
  };

  return (
    <div>
      <form action="">
        <table>
          <thead>
            <tr>
              <td className="Long-inputs-field">
                <label htmlFor="">Position</label>
                <input
                  type="text"
                  value={position}
                  name=""
                  id=""
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="IT specialist"
                />
                <span>Minimum 2 symbol</span>
              </td>
            </tr>
            <tr>
              <td className="Long-inputs-field">
                <label htmlFor="">Company</label>
                <input
                  type="text"
                  value={company}
                  name=""
                  id=""
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Microsoft"
                />
                <span>Minimum 2 symbol</span>
              </td>
            </tr>
            <tr className="Short-inputs-Container">
              <td className="Short-inputs-field">
                <input
                  type="date"
                  value={startDate}
                  name=""
                  id=""
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </td>
              <td className="Short-inputs-field">
                <input
                  type="date"
                  value={endDate}
                  name=""
                  id=""
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="Desctiption">
                <label htmlFor="">Descripion</label>
                <textarea
                  name=""
                  id=""
                  value={jobDescription}
                  cols="30"
                  rows="10"
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Your role on this position"
                ></textarea>
              </td>
            </tr>
          </thead>
        </table>

        <div className="button-container">
          <Link to="/personal">Previous</Link>
          <button>Next Step</button>
        </div>
      </form>
    </div>
  );
};

export default ExpInputs;
