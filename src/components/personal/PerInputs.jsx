import React, { useEffect } from "react";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";

const Inputs = ({ onChange }) => {
  const [name, setName] = useLocalStorage("name");
  const [lastname, setLastname] = useLocalStorage("lastname");
  const [photo, setPhoto] = useLocalStorage("photo");
  const [about, setAbout] = useLocalStorage("about");
  const [mail, setMail] = useLocalStorage("email");
  const [phone, setPhone] = useLocalStorage("phone");

  const Navigate = useNavigate();

  useEffect(() => {
    handleLiveView();
  });

  const handleLiveView = () => {
    onChange({ name, lastname, photo, about, mail, phone });
  };

  const Submit = (e) => {
    e.preventDefault();
    Navigate("/expirience");
  };

  const handleFileSelect = (e) => {
    if (e.target.files[0]) {
      console.log("photo: ", e.target.files);
      setPhoto(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setPhoto(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={Submit}>
      <table cellPadding={10}>
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
              <input type="file" name="photo" onChange={handleFileSelect} />
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
                placeholder="Description"
                onChange={(e) => setAbout(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="Long-inputs-field">
              <label htmlFor="">Email</label>
              <input
                type="email"
                value={mail}
                name=""
                id=""
                placeholder="Email"
                onChange={(e) => setMail(e.target.value)}
              />
              <span>Please include @redberry.ge</span>
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
                placeholder="+995 555 555 555"
                onChange={(e) => setPhone(e.target.value)}
              />
              <span>Please fill in Georgian format</span>
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </thead>
      </table>

      <div className="button-container">
        <button className="Pesronal-Alone-Button">Next Step</button>
      </div>
    </form>
  );
};
export default Inputs;
