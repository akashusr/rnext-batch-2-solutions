import { ReservationContext } from "@/context";
import { useContext } from "react";

export function useReservation() {
    const { reservationData, setReservationData } =
        useContext(ReservationContext);
    return { reservationData, setReservationData };
}
