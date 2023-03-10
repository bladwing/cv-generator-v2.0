import React, { useState } from "react";
import Inputs from "./PerInputs";
import Preview from "./PerPreview";
import Headers from "../header/Header";
import useLocalStorage from "react-use-localstorage";

const Personal = () => {
  const [valueName, setValue] = useState("");
  const [valueLastname, setValueLastname] = useState("");
  const [valueAbout, setValueAbout] = useState("");
  const [valueMail, setValueMail] = useState("");
  const [valuePhone, setValuephone] = useState("");

  const [photo] = useLocalStorage("photo");

  const [header] = useState("Personal Information");
  const [page] = useState("1/3");

  const DataReceiver = ({ name, lastname, about, mail, phone }) => {
    setValue(name);
    setValueLastname(lastname);
    setValueAbout(about);
    setValueMail(mail);
    setValuephone(phone);
  };

  return (
    <div className="Side-Container">
      <div className="First-Side">
        <Headers header={header} page={page} />
        <Inputs onChange={DataReceiver} />
      </div>

      <div className="Second-Side">
        <Preview
          name={valueName}
          lastname={valueLastname}
          photo={photo}
          about={valueAbout}
          mail={valueMail}
          phone={valuePhone}
        />
      </div>
    </div>
  );
};

export default Personal;
