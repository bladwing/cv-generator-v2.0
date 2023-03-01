import React from "react";
import PerPreview from "../personal/PerPreview";
import useLocalStorage from "react-use-localstorage";

const ExpPreview = () => {
  const [name] = useLocalStorage("name");
  const [lastname] = useLocalStorage("lastname");

  const [photo] = useLocalStorage("photo");
  const [about] = useLocalStorage("about");
  const [mail] = useLocalStorage("email");
  const [phone] = useLocalStorage("phone");

  const [position] = useLocalStorage("position");
  const [company] = useLocalStorage("company");
  const [startDate] = useLocalStorage("startDate");
  const [endDate] = useLocalStorage("endDate");
  const [jobDescription] = useLocalStorage("jobDescription");

  return (
    <div>
      <PerPreview
        name={name}
        lastname={lastname}
        photo={photo}
        about={about}
        mail={mail}
        phone={phone}
      />

      <div className="Expirience-info">
        <h2>Expirience</h2>
        <h4>
          {position}, {company}
        </h4>
        <span>
          {startDate} - {endDate}
        </span>
        <p>{jobDescription}</p>
        <hr />
      </div>
    </div>
  );
};

export default ExpPreview;
