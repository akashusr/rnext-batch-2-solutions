import defaultAvatar from "../../assets/avater.webp";
import trofeeImage from "../../assets/trofee.png";
const SelfResultCard = ({
    user,
    myCorrectAnswers,
    myIncorrectAnswers,
    totalCorrectMarks,
    myPosition,
}) => {
    return (
        <div className='bg-primary dark:bg-dark-primary rounded-lg p-6 text-white'>
            <div className='flex flex-col items-center mb-6'>
                <img
                    src={defaultAvatar}
                    alt='Profile Pic'
                    className='w-20 h-20 rounded-full border-4 border-white mb-4 object-cover'
                />
                <h2 className='text-2xl font-bold'>{user?.full_name}</h2>
                {myPosition?.position === 1 && (
                    <img
                        className='size-8'
                        src={trofeeImage}
                        alt='trofeeImage'
                    />
                )}
                <p className='text-xl'>Position {myPosition?.position}</p>
            </div>
            <div className='grid grid-cols-3 gap-4 mb-6'>
                <div className='text-center'>
                    <p className='text-sm opacity-75'>Mark</p>
                    <p className='text-2xl font-bold'>{totalCorrectMarks}</p>
                </div>
                <div className='text-center'>
                    <p className='text-sm opacity-75'>Correct</p>
                    <p className='text-2xl font-bold'>
                        {myCorrectAnswers?.length}
                    </p>
                </div>
                <div className='text-center'>
                    <p className='text-sm opacity-75'>Wrong</p>
                    <p className='text-2xl font-bold'>
                        {myIncorrectAnswers.length}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SelfResultCard;
