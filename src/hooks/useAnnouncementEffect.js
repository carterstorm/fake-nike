import { useEffect, useState } from "react";

export const useAnnouncementEffect = (announcementData, time) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (index === announcementData.length - 1) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, time * 1_000);

        return () => {
            clearInterval(intervalId);
        };
    }, [index, announcementData, time]);

    return index;
};