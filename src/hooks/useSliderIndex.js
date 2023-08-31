import { useState } from "react";

export const useSliderIndex = (data) => {
    const [index, setIndex] = useState(0);

    const setNextIndex = () => {
        setIndex(index < data.length - 1 ? index + 1 : 0);
    };

    const setPrevIndex = () => {
        setIndex(index > 0 ? index - 1 : data.length - 1);
    };

    return [index, setPrevIndex, setNextIndex];
};