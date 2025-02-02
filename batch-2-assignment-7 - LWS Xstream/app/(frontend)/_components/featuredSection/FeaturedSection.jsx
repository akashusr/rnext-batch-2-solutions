import React from "react";
import FeaturedSectionInfo from "./FeaturedSectionInfo";
import FeaturedVideo from "./FeaturedVideo";

const FeaturedSection = ({ dictionary }) => {
    return (
        <>
            <FeaturedSectionInfo dictionary={dictionary} />
            <FeaturedVideo dictionary={dictionary} />
        </>
    );
};

export default FeaturedSection;
