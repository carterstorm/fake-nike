import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useWindowWidth = (setWindowWidthAction) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => {
            dispatch(setWindowWidthAction(window.innerWidth));
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch, setWindowWidthAction]);
};