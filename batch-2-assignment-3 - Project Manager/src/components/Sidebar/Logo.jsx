import logo from "../../assets/lws-logo-en.svg";
import { useDarkMode } from "../hooks/useDarkMode";

const Logo = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className='mb-8 flex items-center'>
      <div className='flex items-center justify-center rounded-full text-xl font-bold'>
        {darkMode ? (
          <img
            src={logo}
            className='mx-auto h-10 text-center'
            alt='LOGO_LIGHT'
          />
        ) : (
          <img
            src='https://learnwithsumit.com/_next/static/media/lws-logo-light.ae7b3c3a.svg'
            className='mx-auto h-10 text-center'
            alt='LOGO_DARK'
          />
        )}
      </div>
    </div>
  );
};

export default Logo;
