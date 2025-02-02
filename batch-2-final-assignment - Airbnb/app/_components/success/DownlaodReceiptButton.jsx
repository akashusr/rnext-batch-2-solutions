"use client";

import { downloadReceipt } from "@/app/_actions/bookingActions";
import { cn } from "@/utils/cn";
import { FaDownload } from "react-icons/fa";
const DownlaodReceiptButton = ({ bookinginfo, classname, dictionary }) => {
    return (
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
                onClick={() => downloadReceipt(bookinginfo?._id.toString())}
                className={cn(
                    `px-6 py-3 bg-primary flex justify-center items-center text-white rounded-lg hover:brightness-90`,
                    classname
                )}>
                <FaDownload className='mr-2' />
                {dictionary?.success?.downloadReceipt}
            </button>
        </div>
    );
};

export default DownlaodReceiptButton;
