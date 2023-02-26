import React, { useState } from "react";
import Inputs from "./PerInputs";
import Preview from "./PerPreview";
import Headers from "../Header";

const Personal = () => {
  const [valueName, setValue] = useState("");
  const [valueLastname, setValueLastname] = useState("");
  const [valueFile, setValueFile] = useState("");
  const [valueAbout, setValueAbout] = useState("");
  const [valueMail, setValueMail] = useState("");
  const [valuePhone, setValuephone] = useState("");

  const [header] = useState("Personal Information")
  const [backLink] = useState("/")

  const DataReceiver = ({ name, lastname, file, about, mail, phone }) => {
    setValue(name);
    setValueLastname(lastname);
    setValueFile(file);
    setValueAbout(about);
    setValueMail(mail);
    setValuephone(phone);
  };

  return (
    <div className="Side-Container">
    
      <div className="First-Side">
        <Headers header={header} backLink={backLink}/>
        <Inputs onChange={DataReceiver} />
      </div>

      <div className="Second-Side">
        <Preview
          name={valueName}
          lastname={valueLastname}
          file={valueFile}
          about={valueAbout}
          mail={valueMail}
          phone={valuePhone}
        />
      </div>
    </div>
  );
};

export default Personal;
