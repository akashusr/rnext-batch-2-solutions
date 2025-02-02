import NodataImage from "../../assets/no-data.svg";
const NoData = ({ text }) => {
    return (
        <div className='flex flex-col justify-center items-center max-w-80'>
            <img src={NodataImage} alt='No data found' />
            <h3 className=' font-xl font-semibold text-gray-500'>{text}</h3>
        </div>
    );
};

export default NoData;
