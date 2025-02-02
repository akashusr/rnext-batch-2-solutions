// dependencies
import { getImgURL } from "../../utils/utils";
import PhotoGridItem from "./PhotoGridItem";

const gridPhotoData = [
  {
    id: 1,
    photos: [
      {
        id: 1,
        url: getImgURL("banner1.png"),
        extraClasses: "sm:opacity-0 lg:opacity-100",
      },
      {
        id: 2,
        url: getImgURL("banner2.png"),
      },
    ],
  },
  {
    id: 2,
    photos: [
      {
        id: 1,
        url: getImgURL("banner3.png"),
      },
      {
        id: 2,
        url: getImgURL("banner4.png"),
      },
      {
        id: 3,
        url: getImgURL("banner5.png"),
      },
    ],
  },
  {
    id: 3,
    photos: [
      {
        id: 1,
        url: getImgURL("banner6.png"),
      },
      {
        id: 2,
        url: getImgURL("banner7.png"),
      },
    ],
  },
];

const BannerPhotoGrid = () => {
  return (
    <div>
      <div
        aria-hidden="true"
        className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
      >
        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
          <div className="flex items-center space-x-6 lg:space-x-8">
            {gridPhotoData?.map((item) => (
              <PhotoGridItem key={item?.id} photos={item?.photos} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPhotoGrid;
