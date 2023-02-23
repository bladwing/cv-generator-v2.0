import React from "react";
import { Link } from "react-router-dom";

const ExpInputs = () => {
  return (
    <div className="First-Side">
      <form action="">
        <table>
          <thead>
            <tr>
              <td className="Long-inputs-field">
                <label htmlFor="">Position</label>
                <input type="text" name="" id="" placeholder="IT specialist" />
                <span>Minimum 2 symbol</span>
              </td>
            </tr>
            <tr>
              <td className="Long-inputs-field">
                <label htmlFor="">Company</label>
                <input type="text" name="" id="" placeholder="Microsoft" />
                <span>Minimum 2 symbol</span>
              </td>
            </tr>
            <tr className="Short-inputs-Container">
              <td className="Short-inputs-field">
                <input type="date" name="" id="" />
              </td>
              <td className="Short-inputs-field">
                <input type="date" name="" id="" />
              </td>
            </tr>
            <tr>
              <td className="Desctiption">
                <label htmlFor="">Descripion</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your role on this position"
                ></textarea>
              </td>
            </tr>
          </thead>
        </table>
        <Link to="/">Next</Link>
      </form>
    </div>
  );
};

export default ExpInputs;
