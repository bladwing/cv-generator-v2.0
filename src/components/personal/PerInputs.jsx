import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

const Inputs = ({ onChange }) => {
  const [name, setName] = useLocalStorage("name");
  const [lastname, setLastname] = useLocalStorage("lastname");
  const [file, setFile] = useLocalStorage("file");
  const [about, setAbout] = useLocalStorage("about");
  const [mail, setMail] = useLocalStorage("email");
  const [phone, setPhone] = useLocalStorage("phone");

  useEffect(() => {
    handleLiveView();
  });

  const handleLiveView = () => {
    onChange({ name, lastname, file, about, mail, phone });
  };

  const Submit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={Submit}>
      <table>
        <thead>
          <tr className="Short-inputs-Container">
            <td className="Short-inputs-field">
              <label htmlFor="">Name</label>
              <input
                type="text"
                value={name}
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
                value={lastname}
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
                value={file}
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
                value={about}
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
                value={about}
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
                value={phone}
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

      <div className="button-container">
        <button>Next Step</button>
      </div>
    </form>
  );
};
export default Inputs;
