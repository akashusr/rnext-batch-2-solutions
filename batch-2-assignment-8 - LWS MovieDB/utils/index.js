export function getFormattedDate(dateString) {
    if (dateString) {
        const date = new Date(dateString);
        const options = { day: "2-digit", month: "long", year: "numeric" };
        return new Intl.DateTimeFormat("en-US", options).format(date);
    } else {
        return "Upcoming";
    }
}

export const getSerializedDataArray = (array) => {
    const serialized = array.map((item) => {
        const { _id, user, ...rest } = item;
        return {
            id: _id.toString(),
            user: user.toString(),
            ...rest,
        };
    });
    return serialized;
};

export const getSerializedDataObject = (object) => {
    const { _id, user, ...rest } = object;
    return {
        id: _id.toString(),
        user: user.toString(),
        ...rest,
    };
};
