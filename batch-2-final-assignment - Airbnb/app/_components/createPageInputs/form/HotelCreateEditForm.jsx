"use client";
import { createHotel, updateHotel } from "@/app/_actions/hotelActions";
import AmenitiesList from "@/app/_components/createPageInputs/AmenitiesList";
import AvailableRooms from "@/app/_components/createPageInputs/AvailableRooms";
import BedRooms from "@/app/_components/createPageInputs/BedRooms";
import Beds from "@/app/_components/createPageInputs/Beds";
import GalleryImages from "@/app/_components/createPageInputs/GalleryImages";
import GuestCapacity from "@/app/_components/createPageInputs/GuestCapacity";
import PropertyDescription from "@/app/_components/createPageInputs/PropertyDescription";
import PropertyLocation from "@/app/_components/createPageInputs/PropertyLocation";
import PropertyName from "@/app/_components/createPageInputs/PropertyName";
import PropertyPrice from "@/app/_components/createPageInputs/PropertyPrice";
import { getAnyUnsavedWork } from "@/utils";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSave } from "react-icons/fa";
import CleaningFee from "../CleaningFee";
export default function HotelCreateEditForm({ editableData, dictionary }) {
    const session = useSession();
    const [errors, setErrors] = useState({});
    const [pending, setPending] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const [isFieldInEditMode, setFieldInEditMode] = useState({
        name: false,
        location: false,
        description: false,
        rate: false,
        rooms: false,
        guest_capacity: false,
        cleaning_fee: false,
        bedrooms: false,
        beds: false,
        cleaning_fee: false,
    });

    const [data, setData] = useState(
        editableData ?? {
            name: "",
            location: "",
            description: "",
            rate: 0,
            rooms: 1,
            thumbnail: "",
            gallery: ["", "", "", "", ""],
            guest_capacity: 1,
            bedrooms: 1,
            beds: 1,
            cleaning_fee: 0,
            amenities: [],
        }
    );

    function onEditField(field) {
        setFieldInEditMode({
            ...isFieldInEditMode,
            [field]: true,
        });
    }

    function onSaveField(field) {
        setFieldInEditMode({
            ...isFieldInEditMode,
            [field]: false,
        });
    }
    const handleAmenityChange = (amenity) => {
        setData((prevData) => {
            const updatedAmenities = prevData.amenities.includes(amenity)
                ? prevData.amenities.filter((item) => item !== amenity) // Remove if exists
                : [...prevData.amenities, amenity]; // Add if not exists

            return { ...prevData, amenities: updatedAmenities };
        });
    };

    function onChangeField(field, value) {
        setData({
            ...data,
            [field]: value,
        });
    }

    const updateGallery = (index, url) => {
        setData((prevData) => {
            const updatedGallery = [...prevData.gallery];
            updatedGallery[index] = url;
            return {
                ...prevData,
                gallery: updatedGallery,
                thumbnail: updatedGallery[0] || "", // Update thumbnail dynamically
            };
        });
    };

    function closeError(field) {
        setErrors((errors) => {
            return {
                ...errors,
                [field]: null,
            };
        });
    }

    const handleUpdateProperty = async () => {
        const hasUnsaved = getAnyUnsavedWork(isFieldInEditMode);
        if (hasUnsaved) {
            toast.error("Save you modifications before proceed");
            return;
        }

        if (data === editableData) {
            toast.error("You have not changed anything");
            return;
        }

        try {
            setPending(true);
            const response = await updateHotel(data);
            if (response?.error) {
                throw {
                    message: "Failed to create property",
                    errors: response.errors,
                };
            }

            setData({
                name: "",
                location: "",
                description: "",
                rate: 0,
                rooms: 1,
                thumbnail: "",
                gallery: ["", "", "", "", ""],
                guest_capacity: 1,
                bedrooms: 1,
                beds: 1,
                cleaning_fee: 0,
                amenities: [],
            });
            setPending(false);
            toast.success("Property Updated Successfully");
            router.push(`/hotel/${response?.data?._id.toString()}`);
        } catch (error) {
            setPending(false);
            setErrors(error.errors);
        } finally {
            setPending(false);
        }
    };

    async function handleCreateProperty() {
        const hasUnsaved = getAnyUnsavedWork(isFieldInEditMode);
        if (hasUnsaved) {
            toast.error("Save you modifications before proceed");
            return;
        }

        try {
            setPending(true);
            const response = await createHotel(data);
            if (response?.error) {
                throw {
                    message: "Failed to create property",
                    errors: response.errors,
                };
            }

            setData({
                name: "",
                location: "",
                description: "",
                rate: 0,
                rooms: 1,
                thumbnail: "",
                gallery: ["", "", "", "", ""],
                guest_capacity: 1,
                bedrooms: 1,
                beds: 1,
                cleaning_fee: 0,
                amenities: [],
            });
            setPending(false);
            toast.success("Property Created Successfully");
            router.push(`/hotel/${response?.data?._id.toString()}`);
        } catch (error) {
            setPending(false);
            setErrors(error.errors);
        } finally {
            setPending(false);
        }
    }

    return (
        <div className='dark:text-gray-200 max-w-7xl mx-auto px-6 py-8 relative'>
            {pathname.includes("create") && (
                <button
                    disabled={pending}
                    onClick={handleCreateProperty}
                    className='px-4 flex gap-2 items-center py-2 bg-primary text-white rounded-lg hover:brightness-90 absolute top-4 right-4'>
                    <FaSave />
                    {dictionary?.publish}
                </button>
            )}
            {pathname.includes("edit") && (
                <button
                    disabled={pending || data === editableData}
                    onClick={handleUpdateProperty}
                    className='px-4 flex gap-2 items-center py-2 bg-primary text-white rounded-lg hover:brightness-90 absolute top-4 right-4'>
                    <FaSave />
                    {dictionary?.updateAndPublish}
                </button>
            )}

            {/* Property Title and Rating */}
            <div className='mb-6'>
                <PropertyName
                    isEditMode={isFieldInEditMode?.name}
                    handleChange={onChangeField}
                    handleSave={onSaveField}
                    handleEdit={onEditField}
                    value={data.name}
                    error={errors?.name}
                    onErrorClose={closeError}
                    dictionary={dictionary}
                />

                <PropertyLocation
                    isEditMode={isFieldInEditMode?.location}
                    handleChange={onChangeField}
                    handleSave={onSaveField}
                    handleEdit={onEditField}
                    value={data.location}
                    error={errors?.location}
                    onErrorClose={closeError}
                    dictionary={dictionary}
                />
            </div>
            {/* Image Gallery */}
            <GalleryImages
                gallery={data.gallery}
                updateGallery={updateGallery}
                thumbnailError={errors?.thumbnail}
                galleryError={errors?.gallery}
                onErrorClose={closeError}
            />

            <PropertyPrice
                isEditMode={isFieldInEditMode?.rate}
                handleChange={onChangeField}
                handleSave={onSaveField}
                handleEdit={onEditField}
                value={data.rate}
                error={errors?.rate}
                onErrorClose={closeError}
                dictionary={dictionary}
            />

            <AvailableRooms
                isEditMode={isFieldInEditMode?.rooms}
                handleChange={onChangeField}
                handleSave={onSaveField}
                handleEdit={onEditField}
                value={data.rooms}
                error={errors?.rooms}
                onErrorClose={closeError}
                dictionary={dictionary}
            />

            {/* Property Details */}
            <div className='grid grid-cols-3 gap-8'>
                {/* Left Column: Property Description */}
                <div className='col-span-2'>
                    <div className='border-b pb-6 mb-6'>
                        <div className='grid grid-cols-1 gap-y-2 text-gray-600'>
                            <GuestCapacity
                                isEditMode={isFieldInEditMode?.guest_capacity}
                                handleChange={onChangeField}
                                handleSave={onSaveField}
                                handleEdit={onEditField}
                                value={data.guest_capacity}
                                error={errors?.guest_capacity}
                                onErrorClose={closeError}
                                dictionary={dictionary}
                            />
                            <BedRooms
                                isEditMode={isFieldInEditMode?.bedrooms}
                                handleChange={onChangeField}
                                handleSave={onSaveField}
                                handleEdit={onEditField}
                                value={data.bedrooms}
                                error={errors?.bedrooms}
                                onErrorClose={closeError}
                                dictionary={dictionary}
                            />

                            <Beds
                                isEditMode={isFieldInEditMode?.beds}
                                handleChange={onChangeField}
                                handleSave={onSaveField}
                                handleEdit={onEditField}
                                value={data.beds}
                                error={errors?.beds}
                                onErrorClose={closeError}
                                dictionary={dictionary}
                            />
                            <CleaningFee
                                isEditMode={isFieldInEditMode?.cleaning_fee}
                                handleChange={onChangeField}
                                handleSave={onSaveField}
                                handleEdit={onEditField}
                                value={data.cleaning_fee}
                                error={errors?.cleaning_fee}
                                onErrorClose={closeError}
                                dictionary={dictionary}
                            />
                        </div>
                    </div>
                    {/* Description */}
                    <div className='mb-6'>
                        <h3 className='text-xl font-semibold mb-4'>
                            {dictionary?.aboutTextHeader}
                        </h3>
                        <PropertyDescription
                            isEditMode={isFieldInEditMode?.description}
                            handleChange={onChangeField}
                            handleSave={onSaveField}
                            handleEdit={onEditField}
                            value={data.description}
                            error={errors?.description}
                            onErrorClose={closeError}
                            dictionary={dictionary}
                        />
                    </div>
                    {/* Amenities */}
                    <div>
                        <h3 className='text-xl font-semibold mb-4'>
                            {dictionary?.offerTextHeader}
                        </h3>

                        <AmenitiesList
                            data={data}
                            handleAmenityChange={handleAmenityChange}
                        />
                    </div>
                </div>
                {/* Right Column: Booking Card */}
            </div>
        </div>
    );
}
