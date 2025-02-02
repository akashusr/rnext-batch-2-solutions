function Skeliton() {
    return (
        <div className='flex cursor-pointer items-start space-x-4 animate-pulse'>
            <div className='w-30 h-20 bg-gray-400 rounded'></div>
            <div className='flex-1 space-y-2'>
                <div className='h-4 bg-gray-400 rounded w-3/4'></div>
                <div className='h-3 bg-gray-400 rounded w-2/4'></div>
                <div className='h-3 bg-gray-400 rounded w-1/4'></div>
            </div>
        </div>
    );
}

const ReletedVideoSkeleton = ({ count = 6 }) => {
    const loaders = Array(count)
        .fill(0)
        .map((item, i) => <Skeliton key={i} />);
    return loaders;
};

export default ReletedVideoSkeleton;
