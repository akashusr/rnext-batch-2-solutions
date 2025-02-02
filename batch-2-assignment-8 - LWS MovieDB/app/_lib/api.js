const base_url =
    process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;

export const getNowPlayingMovies = async () => {
    try {
        if (!base_url) {
            throw new Error("API base URL is not configured");
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000); // 5-second timeout

        const res = await fetch(`${base_url}/movies/now-playing`, {
            cache: "no-store",
            signal: controller.signal,
        });
        clearTimeout(timeout);

        if (!res.ok) {
            throw new Error(
                `Failed to fetch now-playing movies. Status: ${res.status} - ${res.statusText}`
            );
        }

        return res.json();
    } catch (error) {
        if (error.name === "AbortError") {
            return { data: null, error: "Request timed out" };
        }
        return { data: null, error: error.message };
    }
};

// get trending now movies
export const getTrendingNowMovies = async () => {
    try {
        if (!base_url) {
            throw new Error("API base URL is not configured");
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000); // 5-second timeout

        const res = await fetch(`${base_url}/movies/trending-now`, {
            signal: controller.signal,
        });
        clearTimeout(timeout);

        if (!res.ok) {
            throw new Error(
                `Failed to fetch trending-now movies. Status: ${res.status} - ${res.statusText}`
            );
        }

        return res.json();
    } catch (error) {
        if (error.name === "AbortError") {
            return { data: null, error: "Request timed out" };
        }
        return { data: null, error: error.message };
    }
};

//get populer movies
export const getPopularMovies = async () => {
    try {
        if (!base_url) {
            throw new Error("API base URL is not configured");
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000); // 5-second timeout

        const res = await fetch(`${base_url}/movies/popular`, {
            signal: controller.signal,
        });
        clearTimeout(timeout);

        if (!res.ok) {
            throw new Error(
                `Failed to fetch popular movies. Status: ${res.status} - ${res.statusText}`
            );
        }

        return res.json();
    } catch (error) {
        if (error.name === "AbortError") {
            return { data: null, error: "Request timed out" };
        }
        return { data: null, error: error.message };
    }
};

//get top rated movies
export const getTopRatedMovies = async () => {
    try {
        if (!base_url) {
            throw new Error("API base URL is not configured");
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000); // 5-second timeout

        const res = await fetch(`${base_url}/movies/top-rated`, {
            signal: controller.signal,
        });
        clearTimeout(timeout);

        if (!res.ok) {
            throw new Error(
                `Failed to fetch top-rated movies. Status: ${res.status} - ${res.statusText}`
            );
        }

        return res.json();
    } catch (error) {
        if (error.name === "AbortError") {
            return { data: null, error: "Request timed out" };
        }
        return { data: null, error: error.message };
    }
};

//========
//get movie details by id
export const getMovieDetailsById = async (movieId) => {
    try {
        if (!base_url) {
            throw new Error("API base URL is not configured");
        }

        if (!movieId) {
            throw new Error("Movie ID is required to fetch details");
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000); // 5-second timeout

        const res = await fetch(`${base_url}/movies/${movieId}`, {
            signal: controller.signal,
        });
        clearTimeout(timeout);

        if (!res.ok) {
            throw new Error(
                `Failed to fetch movie details for ID ${movieId}. Status: ${res.status} - ${res.statusText}`
            );
        }

        return res.json();
    } catch (error) {
        if (error.name === "AbortError") {
            return { data: null, error: "Request timed out" };
        }
        return { data: null, error: error.message };
    }
};

//get similer movies
export const getSimilarMoviesById = async (movieId) => {
    try {
        if (!base_url) {
            throw new Error("API base URL is not configured");
        }

        if (!movieId) {
            throw new Error("Movie ID is required to fetch similar movies");
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000); // 5-second timeout

        const res = await fetch(`${base_url}/movies/${movieId}/similer`, {
            signal: controller.signal,
        });
        clearTimeout(timeout);

        if (!res.ok) {
            throw new Error(
                `Failed to fetch similar movies for ID ${movieId}. Status: ${res.status} - ${res.statusText}`
            );
        }

        return res.json();
    } catch (error) {
        if (error.name === "AbortError") {
            return { data: null, error: "Request timed out" };
        }
        return { data: null, error: error.message };
    }
};

// get movie Videos
export const getMoviesVideos = async (movieId) => {
    try {
        if (!base_url) {
            throw new Error("API base URL is not configured");
        }

        if (!movieId) {
            throw new Error("Movie ID is required to fetch similar movies");
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000); // 5-second timeout

        const res = await fetch(`${base_url}/movies/${movieId}/videos`, {
            signal: controller.signal,
        });
        clearTimeout(timeout);

        if (!res.ok) {
            throw new Error(
                `Failed to fetch similar movies for ID ${movieId}. Status: ${res.status} - ${res.statusText}`
            );
        }

        return res.json();
    } catch (error) {
        if (error.name === "AbortError") {
            return { data: null, error: "Request timed out" };
        }
        return { data: null, error: error.message };
    }
};

// get searched movie
export const getSearchedMovie = async (query) => {
    try {
        if (!base_url) {
            throw new Error("API base URL is not configured");
        }

        if (!query) {
            throw new Error("Search query is required");
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000); // 5-second timeout

        const res = await fetch(
            `${base_url}/movies/search?query=${encodeURIComponent(query)}`,
            {
                signal: controller.signal,
            }
        );
        clearTimeout(timeout);

        if (!res.ok) {
            throw new Error(
                `Failed to fetch searched movie. Status: ${res.status} - ${res.statusText}`
            );
        }

        return res.json();
    } catch (error) {
        if (error.name === "AbortError") {
            return { data: null, error: "Request timed out" };
        }
        return { data: null, error: error.message };
    }
};
