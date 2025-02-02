import SVGIcon from "../../ui/Icons";

const IconButton = ({ type, notification }) => {
  return (
    <button className='relative mr-4'>
      <SVGIcon type={type} />
      <span className='absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500'>
        {notification}
      </span>
    </button>
  );
};

export default IconButton;
