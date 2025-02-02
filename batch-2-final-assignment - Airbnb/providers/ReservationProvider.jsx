"use client";
import { ReservationContext } from "@/context";
import { useState } from "react";

const ReservationProvider = ({ children }) => {
    const [reservationData, setReservationData] = useState({
        hotelId: "",
        checkin: "",
        checkout: "",
        totalDays: "",
        guest: "",
        hotelInfo: {},
    });
    return (
        <ReservationContext.Provider
            value={{ reservationData, setReservationData }}>
            {children}
        </ReservationContext.Provider>
    );
};

export default ReservationProvider;
