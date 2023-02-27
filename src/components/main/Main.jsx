import { Link } from "react-router-dom";
import "./main.scss";

const Main = () => {
  return (
    <div className="Main-Container">
      <div className="Header-logo-container">
        <img src="/img/logo.svg" alt="logo" />
        <hr />
      </div>

      <Link to="/personal">
        <button>Create Resume</button>
      </Link>
    </div>
  );
};

export default Main;
