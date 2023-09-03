import { useEffect, useState } from "react";

export const useArrowVisibility = (index, windowWidth, dataLength) => {
    const [leftArrowVisibility, setLeftArrowVisibility] = useState(true);
    const [rightArrowVisibility, setRightArrowVisibility] = useState(false);

    useEffect(() => {
        index === 0 ? setLeftArrowVisibility(true) : setLeftArrowVisibility(false);
    }, [index]);

    useEffect(() => {
        if ((windowWidth > 960 && index === dataLength - 3) ||
            (windowWidth < 960 && windowWidth > 600 && index === dataLength - 2) ||
            (windowWidth <= 600 && index === dataLength - 1)) {
            setRightArrowVisibility(true);
        } else {
            setRightArrowVisibility(false);
        }
    }, [index, windowWidth, dataLength]);

    return [leftArrowVisibility, rightArrowVisibility];
};