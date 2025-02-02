import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...args) {
    return twMerge(clsx(...args));
}
