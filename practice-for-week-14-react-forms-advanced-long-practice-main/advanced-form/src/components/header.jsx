import Logo from "../_assets/logo.png";
import "./header.css"


const Header = ({currentTab}) => {

  return (
    <header className="header">
      <img src={Logo} alt="Logo" />
      <div>
        <h1>Survey Tool</h1>
        <p>{currentTab}</p>
      </div>
    </header>
  );
};

export default Header;
