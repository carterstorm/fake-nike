import { useState } from "react";

export const useProductsIndex = (dataLength, windowWidth) => {
    const [index, setIndex] = useState(0);

    const setNextIndex = () => {
        if (index < 9) {
            if ((windowWidth > 960 && index <= dataLength - 4) ||
                (windowWidth < 960 && windowWidth > 600 && index <= dataLength - 3) ||
                (windowWidth <= 600 && index <= dataLength - 2)) {
                setIndex(index => index + 1);
            };
        };
    };

    const setPrevIndex = () => {
        if (index > 0) {
            setIndex(index => index - 1);
        };
    };

    return [index, setPrevIndex, setNextIndex];
};