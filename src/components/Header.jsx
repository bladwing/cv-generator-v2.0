import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
      <button className="Back-button">
        <Link to={props.backLink}>Back</Link>
      </button>
    </div>
  );
};

export default Header;
