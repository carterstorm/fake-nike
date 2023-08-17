export const getPopularProducts = async () => {
    const response = await fetch("./popularProducts.json");

    if (!response.ok) {
        new Error(response.statusText);
    };

    return await response.json();
};