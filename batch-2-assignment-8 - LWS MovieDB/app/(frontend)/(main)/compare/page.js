"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import CompareSectionHeading from "../../../_components/compareSection/CompareSectionHeading";
import CompareSlot from "../../../_components/compareSection/CompareSlot";
import CompareSlotAddButton from "../../../_components/compareSection/CompareSlotAddButton";

export default function CompareMoviesPage() {
    const [slots, setSlots] = useState([
        {
            id: 1,
            data: null,
        },
    ]);

    function handleRemoveSlot(id) {
        const removedSlot = slots.filter((slot) => slot.id !== id);
        setSlots(removedSlot);
    }

    function handleAddSlot(e) {
        if (slots[slots.length - 1].id === 6) {
            toast((t) => (
                <div className='flex gap-2 max-w-fit'>
                    <p>You have added maximum number of slots</p>
                    <button className='' onClick={() => toast.dismiss(t.id)}>
                        ✕
                    </button>
                </div>
            ));
            return false;
        }
        const slotId = slots[slots.length - 1].id + 1;
        setSlots((prevSlots) => [...prevSlots, { id: slotId, data: null }]);
    }

    return (
        <main className='container mx-auto px-4 pt-24 pb-8'>
            <CompareSectionHeading>
                <CompareSlotAddButton handleAddSlot={handleAddSlot} />
            </CompareSectionHeading>

            <div className='grid gap-6 md:grid-cols-2'>
                {slots.map((slot) => (
                    <CompareSlot
                        onRemove={() => handleRemoveSlot(slot.id)}
                        key={slot.id}
                        defaultSlot={slot?.id === 1 ? true : false}
                        slotId={slot.id}
                        slots={slots}
                        setSlots={setSlots}
                        data={slot.data}
                    />
                ))}
            </div>
        </main>
    );
}
