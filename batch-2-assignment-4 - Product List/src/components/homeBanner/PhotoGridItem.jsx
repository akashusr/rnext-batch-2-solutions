/* eslint-disable react/prop-types */
const PhotoGridItem = ({ photos }) => {
  return (
    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
      {photos?.map((photo) => (
        <div
          key={photo?.id}
          className={`h-64 w-44 overflow-hidden rounded-lg ${photo?.extraClasses}`}
        >
          <img
            src={photo?.url}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGridItem;
