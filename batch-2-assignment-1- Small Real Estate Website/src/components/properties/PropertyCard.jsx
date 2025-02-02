import BathIcon from '../icons/BathIcon';
import BedIcon from '../icons/BedIcon';

export default function PropertyCard({
    image,
    title,
    rent = 0.0,
    bedroomCount = 0,
    BathroomCount = 0,
}) {
    return (
        <div className="p-4 bg-white rounded-lg border border-gray-600/10">
            <img src={image} alt="property" />

            <div className="p-6">
                <h4 className="text-2xl font-bold cursor-pointer">{title}</h4>

                <div className="mt-2">
                    <span className="text-xl font-extrabold text-blue-600">
                        ${rent.toFixed(2)}
                    </span>{' '}
                    /M
                </div>
            </div>
            <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
                <div className="flex items-center">
                    <BedIcon className="w-6 h-6 mr-3 text-gray-600 fill-current" />
                    <p>
                        <span className="font-bold text-gray-900">
                            {bedroomCount}
                        </span>{' '}
                        Bedrooms
                    </p>
                </div>
                <div className="flex items-center">
                    <BathIcon className="w-6 h-6 mr-3 text-gray-600 fill-current" />
                    <p>
                        <span className="font-bold text-gray-900">
                            {BathroomCount}
                        </span>{' '}
                        Bathrooms
                    </p>
                </div>
            </div>
        </div>
    );
}
