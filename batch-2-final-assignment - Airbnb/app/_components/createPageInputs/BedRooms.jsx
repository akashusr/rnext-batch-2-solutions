import { cn } from "@/utils/cn";
import { FaDoorOpen, FaSave } from "react-icons/fa";
import EditIcon from "./EditIcon";

const BedRooms = ({
    isEditMode,
    handleChange,
    handleSave,
    handleEdit,
    value,
    error,
    onErrorClose,
    dictionary,
}) => {
    return (
        <>
            {error && <p className='text-sm text-red-500'>*{error}</p>}
            {isEditMode ? (
                <div className='flex items-center text-gray-600'>
                    <input
                        type='number'
                        value={value}
                        min={1}
                        placeholder={value || dictionary?.howManyBedrooms}
                        name='bedrooms'
                        onChange={(e) => {
                            handleChange("bedrooms", parseInt(e.target.value));
                            onErrorClose("bedrooms");
                        }}
                        className={cn(
                            `text-zinc-800 border-2 rounded border-primary font-bold text-md outline-primary`,
                            error && "border-2 border-red-500 rounded"
                        )}
                    />
                    <button
                        onClick={() => handleSave("bedrooms")}
                        className='flex justify-center items-center gap-1 px-4 py-2 bg-primary text-white rounded-lg text-sm ml-4 hover:brightness-90'>
                        {" "}
                        <FaSave /> {dictionary?.save}
                    </button>
                </div>
            ) : (
                <div className='flex items-center text-gray-600'>
                    <span className='edit flex items-center gap-2 text-zinc-500'>
                        <FaDoorOpen /> {dictionary?.howManyBedrooms}
                        <span className='mx-3 font-bold p-1 border-2 border-gray-400 rounded'>
                            {value}
                        </span>
                        <button
                            onClick={() => handleEdit("bedrooms")}
                            className='edit-button'>
                            <EditIcon size={15} />
                        </button>
                    </span>
                </div>
            )}
        </>
    );
};

export default BedRooms;
