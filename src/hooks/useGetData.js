import { useEffect, useState } from "react";
import axios from "axios";

export const useGetData = (fetchLink, time) => {
    const [data, setData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(fetchLink);
                const data = response.data;
                setData({
                    state: "success",
                    data
                });
            } catch {
                setData({
                    state: "error",
                });
            };
        };
        setTimeout(getData, time * 1_000);
    }, [fetchLink, time]);
    return data;
};