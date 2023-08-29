import { useDispatch } from "react-redux";
import { useRef } from "react";

export const useTouchHandlers = (setPrevIndex, setNextIndex) => {
    const dispatch = useDispatch();
    const touchRef = useRef({
        startX: 0,
        startY: 0,
    });

    const handleTouchStart = (event) => {
        touchRef.current.startX = event.touches[0].clientX;
        touchRef.current.startY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event) => {
        const deltaX = event.changedTouches[0].clientX - touchRef.current.startX;
        const deltaY = event.changedTouches[0].clientY - touchRef.current.startY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                dispatch(setPrevIndex());
            } else {
                dispatch(setNextIndex());
            };
        };
    };

    const handleMouseDown = (event) => {
        touchRef.current.startX = event.clientX;
    };

    const handleMouseUp = (event) => {
        const deltaX = event.clientX - touchRef.current.startX;

        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                dispatch(setPrevIndex());
            } else {
                dispatch(setNextIndex());
            };
        };
    };

    return [handleTouchStart, handleTouchEnd, handleMouseDown, handleMouseUp];
};