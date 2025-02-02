// dependencies
import HeaderMainBar from "./HeaderMainBar";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <header className="relative bg-white">
      <Topbar />
      <HeaderMainBar />
    </header>
  );
};

export default Header;
