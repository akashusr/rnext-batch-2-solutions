import { cn } from "@/utils/cn";
import { FaPencil } from "react-icons/fa6";

const EditIcon = ({ classname, size }) => {
    return (
        <FaPencil
            className={cn(
                `text-zinc-500 duration-150 hover:transform hover:scale-110`,
                classname
            )}
            size={size ?? 20}
        />
    );
};

export default EditIcon;
