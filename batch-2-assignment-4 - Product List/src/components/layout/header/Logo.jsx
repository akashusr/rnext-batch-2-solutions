// dependencies
import logo from "../../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="ml-4 flex lg:ml-0">
      <a href="/">
        <span className="sr-only">LWS</span>
        <img className="h-8 w-auto" src={logo} alt="LWS" />
      </a>
    </div>
  );
};

export default Logo;
