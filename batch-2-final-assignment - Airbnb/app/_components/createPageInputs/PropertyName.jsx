import { cn } from "@/utils/cn";
import { FaSave } from "react-icons/fa";
import EditIcon from "./EditIcon";

const PropertyName = ({
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
                <div className='input-field flex items-center gap-2'>
                    <input
                        type='text'
                        value={value}
                        placeholder={value || dictionary?.name}
                        name='name'
                        onChange={(e) => {
                            handleChange("name", e.target.value);
                            onErrorClose("name");
                        }}
                        className={cn(
                            `text-zinc-800 border-2 rounded border-primary font-bold text-3xl outline-primary`,
                            error && `border-red-500 border-2 rounded`
                        )}
                    />
                    <button
                        onClick={() => handleSave("name")}
                        className='flex justify-center items-center gap-1 px-4 py-2 bg-primary text-white rounded-lg text-sm ml-4 hover:brightness-90'>
                        {" "}
                        <FaSave /> {dictionary?.save}
                    </button>
                </div>
            ) : (
                <h1
                    className='text-3xl flex items-center gap-2 font-bold mb-2 text-zinc-500 edit'
                    id='propertyName'>
                    {!isEditMode && !value ? dictionary?.propertyName : value}
                    <button
                        onClick={() => handleEdit("name")}
                        className='edit-button'>
                        <EditIcon />
                    </button>
                </h1>
            )}
        </>
    );
};

export default PropertyName;

{
    /*  */
}
