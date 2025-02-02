export const validateUrl = (url) => {
    // Regex to match Unsplash image URLs (including premium images with query params)
    const unsplashImageRegex = /^https:\/\/(images|plus)\.unsplash\.com\/.*$/; // Includes 'plus.unsplash.com' for premium images
    const unsplashPhotoRegex =
        /^https:\/\/unsplash\.com\/photos\/[a-zA-Z0-9_-]+$/; // Unsplash photo page URLs

    if (!url) return null;

    if (unsplashImageRegex.test(url) || unsplashPhotoRegex.test(url)) {
        return url;
    }

    return null;
};
