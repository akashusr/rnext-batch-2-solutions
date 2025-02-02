export const getImgURL = (fileName) => {
    return new URL(`../assets/backgrounds/${fileName}`, import.meta.url).href;
};

// get color based on result to show circuler progress bar in differnt result
export const getStrockColor = (value) => {
    let color;
    if (value >= 0 && value <= 33) {
        color = "#EA2027";
    } else if (value >= 34 && value <= 50) {
        color = "#EB8317";
    } else if (value >= 51 && value <= 70) {
        color = "#7bed9f";
    } else if (value >= 71 && value <= 100) {
        color = "#06D001";
    } else {
        color = "#EA2027";
    }
    return color;
};

//get sorted quizlist
export const getSortedQuizList = (data) => {
    data.sort((a, b) => {
        if (a.status === "published" && b.status !== "published") {
            return -1;
        }
        if (a.status !== "published" && b.status === "published") {
            return 1;
        }
        return 0;
    });
    return data;
};

//get sorted question list
export const getSortedByUpdatedAt = (data) => {
    data &&
        data.length > 0 &&
        data.sort((a, b) => {
            return new Date(b?.updatedAt) - new Date(a?.updatedAt);
        });

    return data;
};

//get suffled array to randomize options when user perticipate in quiz
export const shuffleArray = (array) => {
    return array
        .map((item) => ({ item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ item }) => item);
};
