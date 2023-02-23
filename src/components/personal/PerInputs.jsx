import React from "react";
import { Link } from "react-router-dom";

const Inputs = () => {
  return (
    <div className="First-Side">
      <form action="">
        <table>
          <thead>
            <tr className="Short-inputs-Container">
              <td className="Short-inputs-field">
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" placeholder="John"/>
                <span>Minimum 2 symbol</span>
              </td>
              <td className="Short-inputs-field">
                <label htmlFor="">LastName</label>
                <input type="text" name="" id="" placeholder="Manson"/>
                <span>Minimum 2 symbol</span>
              </td>
            </tr>
            <tr>
              <td className="Upload-file">
                <input type="file" name="" id="" />
              </td>
            </tr>
            <tr >
              <td className="Desctiption">
                <label htmlFor="">Description</label>
                <textarea type="text" name="" id="" />
              </td>
            </tr>
            <tr>
              <td className="Long-inputs-field">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name=""
                  id=""
                
                />
                <span>minimum 2 symbol</span>
              </td>
              </tr>
              <tr >
              <td className="Long-inputs-field">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  name=""
                  id=""
                />
                <span>minimum 2 symbol</span>
              </td>

            
      
            </tr>
            <tr>
              <td></td>
            </tr>
          </thead>
        </table>
      </form>
      <Link to="/expirience">Next</Link>
    </div>
  );
};

export default Inputs;
