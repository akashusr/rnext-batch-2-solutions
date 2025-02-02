export const getAvarageRatings = (ratingsArray) => {
    if (!Array.isArray(ratingsArray) || ratingsArray.length === 0) {
        return "0.0"; // Default value for no ratings
    }

    const totalRatings = ratingsArray.reduce(
        (acc, item) => acc + (item?.rating || 0),
        0
    );
    return (totalRatings / ratingsArray.length).toFixed(1);
};

export function getAnyUnsavedWork(obj) {
    const hasUnsaved = Object.values(obj).some((value) => value === true);
    return hasUnsaved;
}

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
};

// Output: "Jan 5, 2025"

export function calculateTotalDays(checkin, checkout) {
    // Parse the dates
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    // Ensure valid dates
    if (isNaN(checkinDate) || isNaN(checkoutDate)) {
        return "Invalid dates";
    }

    // Calculate the difference in time (milliseconds)
    const differenceInTime = checkoutDate - checkinDate;

    // Convert milliseconds to days
    const totalDays = differenceInTime / (1000 * 60 * 60 * 24);

    // If totalDays is less than 0, return an error
    if (totalDays < 0) {
        return "Checkout date cannot be earlier than checkin date";
    }

    return totalDays === 0 ? 1 : totalDays; // Default to 1 day if checkin and checkout are the same day
}

export function formatDateRange(startDate, endDate) {
    const options = { month: "short", day: "numeric" };

    // Format the start and end dates
    const start = new Date(startDate).toLocaleDateString("en-US", options);
    const end = new Date(endDate).toLocaleDateString("en-US", {
        day: "numeric",
    });

    // Extract the year from the start date
    const year = new Date(startDate).getFullYear();

    // Combine them into the desired format
    return `${start} - ${end}, ${year}`;
}

// Output: Jan 3 - 8, 2025
