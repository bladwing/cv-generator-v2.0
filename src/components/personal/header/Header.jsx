import { Link } from "react-router-dom";
import "./header.scss"

const Header = (props) => {
  return (
    <div className="Header-Container">
      <h1>{props.header}</h1>
      <button className="Back-button">
        <Link to={props.backLink}>-</Link>
      </button>
      <hr />
  
    </div>
  );
};

export default Header;
