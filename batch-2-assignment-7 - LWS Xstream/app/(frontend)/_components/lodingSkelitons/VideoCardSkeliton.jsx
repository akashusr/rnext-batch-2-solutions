function Skeliton() {
    return (
        <div className='rounded-lg overflow-hidden bg-gray-300 min-h-[265px] animate-pulse'>
            <div className='w-full h-40 bg-gray-400'></div>
            <div className='p-2'>
                <div className='h-4 bg-gray-400 rounded w-3/4 mb-2'></div>
                <div className='h-3 bg-gray-400 rounded w-1/2'></div>
            </div>
        </div>
    );
}

const VideoSkeleton = ({ count = 8 }) => {
    const loaders = Array(count)
        .fill(0)
        .map((item, i) => <Skeliton key={i} />);
    return loaders;
};

export default VideoSkeleton;
