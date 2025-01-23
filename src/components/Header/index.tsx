import "./styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
