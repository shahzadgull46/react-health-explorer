import { LOGO_URL } from "../../public/utils/constants";



const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="logo.png" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;