import clsx from "clsx";
import { twJoin } from "tailwind-merge";

export function cn(...args) {
    return twJoin(clsx(...args));
}
