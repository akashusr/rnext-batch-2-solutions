"use server";
import { redirect } from "next/navigation";

export async function handleVideoRedirect(videoId, locale) {
    // Redirect to the video dynamically
    redirect(`/${locale}/videos/${videoId}`);
}

export async function redirectTo(url) {
    redirect(url);
}
