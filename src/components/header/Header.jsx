import { Link } from "react-router-dom";

import "./header.scss";

const Header = (props) => {

  const GoHome = () => {
    localStorage.clear();
  };

  return (
    <div className="Header-Container">
      <h1>{props.header}</h1>
      <p>{props.page}</p>
      <Link to={"/"} className="Back-button" onClick={() => GoHome()}>
        <img src="/img/back.svg" alt="" />
      </Link>
      <hr />
    </div>
  );
};

export default Header;
