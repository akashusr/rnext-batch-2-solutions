// dependencies
import HamburgerIcon from "../../svgIcons/HamburgerIcon";
import HeaderButtons from "./HeaderButtons";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

const HeaderMainBar = () => {
  return (
    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="flex h-16 items-center">
          {/* Mobile menu toggle, controls the 'mobileMenuOpen' state. */}
          <button
            type="button"
            className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
          >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open menu</span>
            <HamburgerIcon />
          </button>
          {/* Logo */}
          <Logo />
          {/* Flyout menus */}
          <HeaderMenu />
          <HeaderButtons />
        </div>
      </div>
    </nav>
  );
};

export default HeaderMainBar;
