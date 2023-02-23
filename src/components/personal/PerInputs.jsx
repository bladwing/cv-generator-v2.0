import React, { useEffect, useState } from "react";

const Inputs = ({ onChange }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [file, setFile] = useState("");
  const [about, setAbout] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    handleChange();
  });

  const Submit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {
    onChange(name, lastname, file, about, mail, phone);
  };

  return (
    <div className="First-Side">
      <form onSubmit={Submit}>
        <table>
          <thead>
            <tr className="Short-inputs-Container">
              <td className="Short-inputs-field">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="John"
                  onChange={(e) => setName(e.target.value)}
                />
                <span>Minimum 2 symbol</span>
              </td>
              <td className="Short-inputs-field">
                <label htmlFor="">LastName</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Manson"
                  onChange={(e) => setLastname(e.target.value)}
                />
                <span>Minimum 2 symbol</span>
              </td>
            </tr>
            <tr>
              <td className="Upload-file">
                <input
                  type="file"
                  name=""
                  id=""
                  onChange={(e) => setFile(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="Desctiption">
                <label htmlFor="">Description</label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => setAbout(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="Long-inputs-field">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name=""
                  id=""
                  onChange={(e) => setMail(e.target.value)}
                />
                <span>minimum 2 symbol</span>
              </td>
            </tr>
            <tr>
              <td className="Long-inputs-field">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span>minimum 2 symbol</span>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </thead>
        </table>
        <button>Next Step</button>
      </form>
    </div>
  );
};
export default Inputs;
