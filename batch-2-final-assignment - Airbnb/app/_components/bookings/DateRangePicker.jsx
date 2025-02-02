import { calculateTotalDays } from "@/utils";
import { cn } from "@/utils/cn";
import { addDays, eachDayOfInterval, parse } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRangePicker = ({
    setReservationData,
    checkin,
    checkout,
    border,
    bookedDays,
}) => {
    const [state, setState] = useState([
        {
            startDate: checkin || new Date(),
            endDate: checkout || addDays(new Date(), 0),
            key: "selection",
        },
    ]);

    function handleSelection(item) {
        const selectedDate = new Date(item?.selection?.startDate);
        const today = new Date();

        // Normalize both dates to midnight for accurate comparison
        selectedDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        // Check if the selected date is before today
        if (selectedDate < today) {
            return false;
        } else {
            setState([item.selection]);
        }
    }

    useEffect(() => {
        setReservationData((data) => {
            return {
                ...data,
                checkin: state[0].startDate,
                checkout: state[0].endDate,
                totalDays: calculateTotalDays(
                    state[0].startDate,
                    state[0].endDate
                ),
            };
        });
    }, [setReservationData, state]);

    const disabledDateRanges = bookedDays?.map((reservation) => ({
        start: parse(reservation.checkin, "MMM dd, yyyy", new Date()),
        end: parse(reservation.checkout, "MMM dd, yyyy", new Date()),
    }));

    const disabledDates = disabledDateRanges
        .map((range) =>
            eachDayOfInterval({
                start: range.start,
                end: range.end,
            })
        )
        .flat();

    return (
        <div
            className={cn(
                `date-range`,
                border ? "border-b border-gray-400 !*:dark:bg-transparent " : ""
            )}>
            <DateRange
                editableDateInputs={true}
                onChange={(item) => handleSelection(item)}
                moveRangeOnFirstSelection={false}
                ranges={state}
                showDateDisplay={false}
                minDate={new Date()} // Restrict to today or future dates
                disabledDates={disabledDates} // Disable specific date range
            />
        </div>
    );
};

export default DateRangePicker;
