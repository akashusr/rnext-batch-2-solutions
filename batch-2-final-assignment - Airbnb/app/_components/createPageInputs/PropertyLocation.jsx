import { cn } from "@/utils/cn";
import { FaSave } from "react-icons/fa";
import EditIcon from "./EditIcon";

const PropertyLocation = ({
    isEditMode,
    handleChange,
    handleSave,
    handleEdit,
    value,
    error,
    onErrorClose,
    placeholder,
    dictionary,
}) => {
    return (
        <>
            {error && <p className='text-sm text-red-500'>*{error}</p>}
            {isEditMode ? (
                <div className='flex items-center text-gray-600'>
                    <input
                        type='text'
                        value={value}
                        placeholder={value || dictionary?.location}
                        name='location'
                        onChange={(e) => {
                            handleChange("location", e.target.value);
                            onErrorClose("location");
                        }}
                        className={cn(
                            `text-zinc-800 border-2 rounded border-primary font-bold text-md outline-primary`,
                            error && `border-2 border-red-500 rounded`
                        )}
                    />
                    <button
                        onClick={() => handleSave("location")}
                        className='flex justify-center items-center gap-1 px-4 py-2 bg-primary text-white rounded-lg text-sm ml-4 hover:brightness-90'>
                        {" "}
                        <FaSave /> {dictionary?.save}
                    </button>
                </div>
            ) : (
                <div className='flex items-center text-gray-600'>
                    <span className='edit flex items-center gap-2 text-gray-600'>
                        {!isEditMode && !value
                            ? dictionary?.propertyLocation
                            : value}

                        <button
                            onClick={() => handleEdit("location")}
                            className='edit-button'>
                            <EditIcon size={15} />
                        </button>
                    </span>
                </div>
            )}
        </>
    );
};

export default PropertyLocation;

{
    /*  */
}
