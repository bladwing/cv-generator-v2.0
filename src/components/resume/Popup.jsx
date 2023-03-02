import React from "react";
import useLocalStorage from "react-use-localstorage";

const Popup = () => {
  const [show, setShow] = useLocalStorage("PopUp");

  return (
    <div
      className="Resume-Popup-Container"
      style={{ display: show === "true" ? "block" : "none" }}
    >
      <button onClick={() => setShow(false)}>x</button>
      <h2>Resume is ready 🎉</h2>
    </div>
  );
};

export default Popup;
