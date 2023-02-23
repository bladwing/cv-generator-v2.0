import React, { useState } from "react";
import Inputs from "./PerInputs";
import Preview from "./PerPreview";

const Personal = () => {
  const [valueName, setValue] = useState("");
  const [valueLastname, setValueLastname] = useState("");
  const [valueFile, setValueFile] = useState("");
  const [valueAbout, setValueAbout] = useState("");
  const [valueMail, setValueMail] = useState("");
  const [valuePhone, setValuephone] = useState("");

  const handleChange = (name, lastname, file, about, mail, phone) => {
    setValue(name);
    setValueLastname(lastname);
    setValueFile(file);
    setValueAbout(about);
    setValueMail(mail);
    setValuephone(phone);
  };

  return (
    <div className="Side-Container">
      <h1>Pesonal</h1>

      <Inputs onChange={handleChange} />

      <Preview
        name={valueName}
        lastname={valueLastname}
        file={valueFile}
        about={valueAbout}
        mail={valueMail}
        phone={valuePhone}
      />
    </div>
  );
};

export default Personal;
