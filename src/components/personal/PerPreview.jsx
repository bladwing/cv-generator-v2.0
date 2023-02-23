import React from "react";

const Preview = ({ name, lastname, file, about, mail, phone }) => {
  return (
    <div className="Second-Side">
      <div className="Persona-info">
        <h1>
          {name} {lastname}
        </h1>
        <img src={file} alt="profilePhoto" />
        <p>{about}</p>
        <h3>{mail}</h3>
        <h3>{phone}</h3>
      </div>
    </div>
  );
};

export default Preview;
