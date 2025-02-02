const OptionInput = ({ children }) => {
    return (
        <div className='flex items-center space-x-2 px-4 py-1 rounded-md group focus-within:ring focus-within:ring-primary/80 bg-white'>
            {children}
        </div>
    );
};

export default OptionInput;
