const videos = {
    all: () => import("./videos.json").then((module) => module.default),
    featured: () =>
        import("./featuredVideo.json").then((module) => module.default),
};

export const getVideos = async (variation, id) => {
    let allVideos = await videos["all"]();
    if (variation === "all" && id === undefined) {
        return allVideos;
    }
    if (variation === "single" && id) {
        return allVideos.find((video) => video.videoId === id);
    }
    if (variation === "featured" && id === undefined) {
        return await videos["featured"]();
    }
};
