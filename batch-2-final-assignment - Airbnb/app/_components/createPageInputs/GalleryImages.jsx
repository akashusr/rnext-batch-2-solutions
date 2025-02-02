import { validateUrl } from "@/utils/validateImageUrl";
import Image from "next/image";

const GalleryImages = ({
    gallery,
    updateGallery,
    thumbnailError,
    galleryError,
    onErrorClose,
}) => {
    return (
        <>
            {thumbnailError && (
                <p className='text-red-500 text-sm'>*{thumbnailError}</p>
            )}
            {galleryError && (
                <p className='text-red-500 text-sm'>*{galleryError}</p>
            )}

            <div className=' grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]'>
                {gallery.map((url, index) => (
                    <div
                        className={`relative ${
                            index === 0
                                ? `col-span-2 row-span-2 ${
                                      thumbnailError &&
                                      "border-2 rounded  border-red-500"
                                  } `
                                : `gallery-image ${
                                      galleryError &&
                                      "border-2 rounded  border-red-500"
                                  }`
                        }`}
                        key={index}>
                        <Image
                            width={600}
                            height={400}
                            src={
                                validateUrl(url) ||
                                "https://placehold.co/600x400.png"
                            }
                            alt={`Room ${index + 1}`}
                            className='w-full h-full object-cover rounded-lg'
                        />
                        <input
                            type='text'
                            value={url}
                            placeholder={`https://placehold.co/600x400`}
                            onChange={(e) => {
                                updateGallery(index, e.target.value);
                                onErrorClose("gallery");
                                onErrorClose("thumbnail");
                            }}
                            className='w-11/12 p-2 border dark:bg-gray-900  border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white'
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default GalleryImages;
