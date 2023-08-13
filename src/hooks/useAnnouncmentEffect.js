import { useEffect, useState } from "react";

export const useAnnouncmentEffect = (announcmentData, time) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (index === announcmentData.length - 1) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, time * 1_000);

        return () => {
            clearInterval(intervalId);
        };
    }, [index, announcmentData, time]);

    return index;
};