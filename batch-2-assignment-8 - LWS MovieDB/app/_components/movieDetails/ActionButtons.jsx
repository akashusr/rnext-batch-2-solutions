import { findFromWatchListbyId } from "@/app/_lib/watchlistActions";
import AddToWatchListButton from "./AddToWatchListButton";
import { getMovieDetailsById } from "@/app/_lib/api";

const ActionButton = async ({ movieId }) => {
    // Fetching all necessary data on the server side
    const movieDetails = await getMovieDetailsById(movieId);
    const isAddedToWatchList = await findFromWatchListbyId(movieId);

    return (
        <div className='flex flex-wrap gap-4'>
            <AddToWatchListButton
                movieDetails={movieDetails}
                addedToList={isAddedToWatchList}
            />
        </div>
    );
};

export default ActionButton;
