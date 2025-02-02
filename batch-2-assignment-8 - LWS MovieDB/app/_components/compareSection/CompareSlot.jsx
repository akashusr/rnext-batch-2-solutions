import { useState } from "react";
import { createPortal } from "react-dom";
import MovieSelectBoxModal from "./MovieSelectBoxModal";
import SlotData from "./SlotData";

const CompareSlot = ({
    defaultSlot,
    onRemove,
    slotId,
    setSlots,
    slots,
    data,
}) => {
    const [showModal, setShowModal] = useState(false);
    return data ? (
        <SlotData
            setSlots={setSlots}
            onRemove={onRemove}
            slots={slots}
            data={data}
            slotId={slotId}
            setShowModal={setShowModal}
        />
    ) : (
        <>
            <div className='bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]'>
                {slots.length > 1 && (
                    <div className='flex justify-end mb-4'>
                        <button
                            onClick={onRemove}
                            className='text-gray-400 hover:text-white'>
                            ✕
                        </button>
                    </div>
                )}

                <div className='flex-grow flex flex-col items-center justify-center'>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowModal(true);
                        }}
                        className='bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer'>
                        Select Movie
                    </button>
                </div>
            </div>
            {showModal &&
                createPortal(
                    <MovieSelectBoxModal
                        setSlots={setSlots}
                        slots={slots}
                        slotId={slotId}
                        onCloseClick={() => setShowModal(false)}
                    />,
                    document.body
                )}
        </>
    );
};

export default CompareSlot;
