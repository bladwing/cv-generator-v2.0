import { useNavigate } from "react-router-dom";

import "./header.scss";

const Header = (props) => {
  const Navigate = useNavigate();

  const GoHome = () => {
    Navigate("/");
    localStorage.clear();
  };

  return (
    <div className="Header-Container">
      <h1>{props.header}</h1>
      <p>{props.page}</p>
      <button className="Back-button" onClick={() => GoHome()}>
        <img src="/img/back.svg" alt="" />
      </button>
      <hr />
    </div>
  );
};

export default Header;
