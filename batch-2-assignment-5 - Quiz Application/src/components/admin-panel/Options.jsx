const Options = ({ option, checked }) => {
    return (
        <label className='flex cursor-pointer items-center space-x-3'>
            <input
                type='radio'
                readOnly
                className='form-radio text-buzzr-purple'
                checked={checked}
            />
            <span>{option}</span>
        </label>
    );
};

export default Options;
