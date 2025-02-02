// dependencies
import Copyright from "./Copyright";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <footer
      className="mx-auto mt-20 w-full max-w-container px-4 sm:px-6 lg:px-8"
      aria-labelledby="footer-heading"
    >
      <div className="items-centers grid grid-cols-1 justify-between gap-4 border-t border-gray-100 py-6 md:grid-cols-2">
        <Copyright />
        <FooterMenu />
      </div>
    </footer>
  );
};

export default Footer;
