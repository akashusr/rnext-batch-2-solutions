import { FaSwimmer } from "react-icons/fa";
import {
    FaDumbbell,
    FaSink,
    FaSquareParking,
    FaUmbrellaBeach,
    FaWifi,
} from "react-icons/fa6";

export const amenitiesList = [
    {
        id: "am1",
        amenity: "Beach access",
    },
    {
        id: "am2",
        amenity: "Private pool",
    },
    {
        id: "am3",
        amenity: "Free Wi-Fi",
    },
    {
        id: "am4",
        amenity: "Kitchen",
    },
    {
        id: "am5",
        amenity: "Free Parking",
    },
    {
        id: "am6",
        amenity: "Fitness Center",
    },
];

export function getAmenitiesIcon(amenities) {
    let amenetiesIcon;
    switch (amenities) {
        case "Beach access":
            amenetiesIcon = <FaUmbrellaBeach />;
            break;
        case "Private pool":
            amenetiesIcon = <FaSwimmer />;
            break;
        case "Kitchen":
            amenetiesIcon = <FaSink />;
            break;
        case "Free Wi-Fi":
            amenetiesIcon = <FaWifi />;
            break;
        case "Free Parking":
            amenetiesIcon = <FaSquareParking />;
            break;
        case "Fitness Center":
            amenetiesIcon = <FaDumbbell />;
            break;
    }
    return amenetiesIcon;
}
