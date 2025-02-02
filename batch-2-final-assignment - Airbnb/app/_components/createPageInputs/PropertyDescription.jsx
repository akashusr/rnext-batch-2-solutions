import { cn } from "@/utils/cn";
import { FaSave } from "react-icons/fa";
import EditIcon from "./EditIcon";

const PropertyDescription = ({
    isEditMode,
    handleChange,
    handleSave,
    handleEdit,
    value,
    error,
    dictionary,
    onErrorClose,
}) => {
    return (
        <>
            {error && <p className='text-sm text-red-500'>*{error}</p>}
            {isEditMode ? (
                <div className='flex items-center text-gray-600'>
                    <textarea
                        rows={4}
                        cols={60}
                        type='number'
                        value={value}
                        placeholder={value || dictionary?.aboutTextHeader}
                        name='description'
                        onChange={(e) => {
                            handleChange("description", e.target.value);
                            onErrorClose("description");
                        }}
                        className={cn(
                            `text-zinc-800 border-2 rounded border-primary font-bold text-md outline-primary`,
                            error && `border-2 border-red-500 rounded`
                        )}
                    />
                    <button
                        onClick={() => handleSave("description")}
                        className='flex justify-center items-center gap-1 px-4 py-2 bg-primary text-white rounded-lg text-sm ml-4 hover:brightness-90'>
                        {" "}
                        <FaSave /> {dictionary?.save}
                    </button>
                </div>
            ) : (
                <div className='flex items-center text-gray-600'>
                    <span className='ext-gray-700 leading-relaxed edit'>
                        {!isEditMode && !value
                            ? dictionary?.aboutTextHeader
                            : value}
                        <button
                            onClick={() => handleEdit("description")}
                            className='edit-button ml-2'>
                            <EditIcon size={15} />
                        </button>
                    </span>
                </div>
            )}
        </>
    );
};

export default PropertyDescription;
