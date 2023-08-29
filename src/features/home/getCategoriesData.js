export const getCategoriesData = async () => {
    const response = await fetch("./categoriesData.json");

    if (!response.ok) {
        new Error(response.statusText);
    };

    return await response.json();
};